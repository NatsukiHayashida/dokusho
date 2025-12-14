import { defineCollection, z } from 'astro:content';

const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    publisher: z.string().optional(),
    lender: z.string().optional(),
    status: z.enum(['読書中', '読了']).default('読了'),
    date: z.date().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  books: booksCollection,
};
