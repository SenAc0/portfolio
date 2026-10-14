import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** Quita el prefijo de idioma del id de la colección: 'es/gooda' -> 'gooda'. */
export function projectSlug(project: Project): string {
  return project.id.split('/').slice(1).join('/');
}

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects');

  const stray = all.filter((project) => !project.id.includes('/'));
  if (stray.length > 0) {
    throw new Error(
      `[projects] estos archivos no están dentro de una carpeta de idioma: ` +
        stray.map((project) => `${project.id}.md`).join(', '),
    );
  }

  const everySlug = new Set(all.map(projectSlug));

  for (const code of Object.keys(languages)) {
    const translated = new Set(
      all.filter((project) => project.id.startsWith(`${code}/`)).map(projectSlug),
    );
    const missing = [...everySlug].filter((slug) => !translated.has(slug));

    if (missing.length > 0) {
      throw new Error(
        `[projects] faltan traducciones en "${code}": ` +
          missing.map((slug) => `${code}/${slug}.md`).join(', '),
      );
    }
  }

  return all
    .filter((project) => project.id.startsWith(`${lang}/`))
    .sort((a, b) => b.data.year - a.data.year);
}
