import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One collection, one entry per piece of furniture.
 * Add a new piece by creating a folder in src/content/work/ with an index.md
 * plus its images. No code changes needed.
 *
 * `title` is the Chinese name (primary). `titleEn` is the English name shown
 * beneath it — both are rendered, so every piece reads bilingually.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string().default(''),
      category: z.enum([
        'living-room',
        'tea-room',
        'dining-room',
        'bedroom',
        'single-items',
        'others',
      ]),
      year: z.number().optional(),
      materials: z.string().optional(),
      materialsEn: z.string().optional(),
      dimensions: z.string().optional(),
      description: z.string().optional(),
      descriptionEn: z.string().optional(),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      order: z.number().default(100),
      featured: z.boolean().default(false),
    }),
});

export const collections = { work };
