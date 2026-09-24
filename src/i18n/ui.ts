export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

/**
 * `es` define las claves canónicas: cualquier otro idioma debe tenerlas todas,
 * o TypeScript marca el error aquí mismo en vez de dejar un `undefined` en la página.
 */
function defineUi<T extends Record<string, string>>(
  dict: { es: T } & { [K in Lang]: Record<keyof T, string> },
) {
  return dict;
}

export const ui = defineUi({
  es: {
    // Presentation
    'nav.presentation': 'Hola, soy ',
    'presentation.cv': 'Ver CV',

    // Header
    'nav.home': 'INICIO',
    'nav.projects': 'PROYECTOS',
    'nav.experience': 'EXPERIENCIA',
    'nav.education': 'EDUCACIÓN',
    'nav.site': 'SITIO',

    // Títulos de sección
    'section.aboutme': 'Sobre mí',
    'section.projects': 'Proyectos',
    'section.experience': 'Experiencia',
    'section.education': 'Educación',
    'section.aboutthissite': 'Sobre este sitio',

    // Tarjetas
    'card.more': 'Ver más',
    'card.present': 'Presente',

    // Footer
    'footer.license': 'Código disponible bajo la licencia MIT.',

    // Accesibilidad
    'a11y.language': 'Cambiar idioma',


    // Metadatos
    'meta.title': 'Portafolio',
    'meta.description': 'Portafolio personal',
  },

  en: {
    // Presentation
    'nav.presentation': "Hi, I'm ",
    'presentation.cv': 'View CV',

    // Header
    'nav.home': 'HOME',
    'nav.projects': 'PROJECTS',
    'nav.experience': 'EXPERIENCE',
    'nav.education': 'EDUCATION',
    'nav.site': 'SITE',

    // Section titles
    'section.aboutme': 'About me',
    'section.projects': 'Projects',
    'section.experience': 'Experience',
    'section.education': 'Education',
    'section.aboutthissite': 'About this site',

    // Cards
    'card.more': 'See more',
    'card.present': 'Present',

    // Footer
    'footer.license': 'Code available under the MIT license.',

    // Accessibility
    'a11y.language': 'Switch language',

    // Metadata
    'meta.title': 'Portfolio',
    'meta.description': 'Personal portfolio',
  },
});

export type UiKey = keyof typeof ui.es;

/**
 * Devuelve la función de traducción para un idioma.
 * Si la clave no existe en ese idioma, cae al idioma por defecto.
 *
 * const t = useTranslations(lang);
 * <h1>{t('section.aboutme')}</h1>
 */
export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Valida un valor desconocido (params de ruta, Astro.currentLocale) como idioma soportado. */
export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}

/** Igual que isLang pero devuelve siempre un idioma usable. */
export function toLang(value: unknown): Lang {
  return isLang(value) ? value : defaultLang;
}
