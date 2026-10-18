import { getCollection } from "astro:content";

export const getProjects = async () =>
  (await getCollection("projects")).sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

export const statusLabel: Record<string, string> = {
  "in-progress": "In progress",
  shipped: "Shipped",
  published: "Published",
  archived: "Archived",
};
