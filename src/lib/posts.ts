import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/** "20 out 2026" */
export function formatarData(d: Date): string {
  return `${d.getUTCDate()} ${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** O slug vem do nome do arquivo, sem o prefixo de data que o painel adiciona. */
export function slugDoPost(post: Post): string {
  return post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\/index$/, '');
}

export function urlDoPost(post: Post): string {
  return `/${slugDoPost(post)}/`;
}

/** Minutos de leitura a 200 palavras por minuto, mínimo 1. */
export function tempoDeLeitura(markdown: string | undefined): number {
  const palavras = (markdown ?? '').replace(/[#*_>`\[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}

/**
 * Separa o sinal final de um título ("." "?" "!" "…") para ir em vinho.
 * "Discorda do caminho." → { texto: "Discorda do caminho", sinal: "." }
 */
export function separarSinal(titulo: string): { texto: string; sinal: string } {
  const m = titulo.match(/^(.*?)([.?!…]+)$/);
  return m ? { texto: m[1], sinal: m[2] } : { texto: titulo, sinal: '' };
}

/** Todos os textos publicados, do mais novo ao mais antigo. Rascunhos só aparecem em desenvolvimento. */
export async function textosPublicados(): Promise<Post[]> {
  const todos = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  return todos.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
