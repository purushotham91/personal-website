import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.string(),
    status: z.enum(["in-progress", "shipped", "published", "archived"]),
    role: z.string(),
    order: z.number().optional(),
    stack: z.array(z.string()),
    results: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })).optional(),
  }),
});

export const collections = { projects };
