import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional().default(''),
    category: z.enum(['Negócios', 'Política', 'Sociedade', 'Livros', 'Relações', 'Etc.']).default('Etc.'),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    // Imagem de capa para redes sociais (opcional). Caminho a partir de /media.
    image: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts, pages };
