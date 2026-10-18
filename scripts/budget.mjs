// Post-build performance budget. Every HTML page must fit in the first TCP
// round trip: initcwnd = 10 segments × 1460 B ≈ 14.6 KB, so budget 14 KB
// compressed (gzip -9 as a conservative stand-in for Cloudflare's brotli).
// Replaces the __WIRE__ placeholder with the page's measured size.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const DIST = new URL("../dist/", import.meta.url).pathname;
const BUDGET = 14 * 1024;

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith(".html")) yield p;
  }
}

const gz = (s) => gzipSync(s, { level: 9 }).length;
const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

let failed = false;
for await (const file of htmlFiles(DIST)) {
  let html = await readFile(file, "utf8");
  // Size depends on the label we insert, so settle it in two passes.
  let size = gz(html.replace("__WIRE__", "00.0 KB"));
  html = html.replace("__WIRE__", kb(size));
  size = gz(html);
  await writeFile(file, html);
  const ok = size <= BUDGET;
  failed ||= !ok;
  console.log(`${ok ? "ok  " : "FAIL"} ${kb(size).padStart(8)}  ${file.slice(DIST.length)}`);
}

if (failed) {
  console.error(`\nPage over the ${kb(BUDGET)} budget.`);
  process.exit(1);
}
