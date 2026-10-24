import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../config';
import { textosPublicados, urlDoPost } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await textosPublicados();
  return rss({
    title: site.name,
    description: site.metaDescricao,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.subtitle,
      pubDate: post.data.date,
      link: urlDoPost(post),
      categories: [post.data.category],
      content: post.rendered?.html,
    })),
    customData: `<language>pt-BR</language>`,
    stylesheet: false,
  });
}
