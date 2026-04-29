import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    status: z.enum(["in-progress", "shipped", "published", "archived"]),
    role: z.string(),
    order: z.number().optional(),
    stack: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
