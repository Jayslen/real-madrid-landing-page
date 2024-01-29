import rss, {pagesGlobToRssItems} from '@astrojs/rss'

export async function GET(context) {
  return rss({
    title: 'Real Madrid | Noticias',
    description: 'Noticias actualizadas de lo que pasa en el Real Madrid Futbool club',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-es</language>`,
  });
}