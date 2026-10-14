import { defineCollection} from 'astro:content';
import { z } from 'zod';
import { file, glob } from 'astro/loaders'





const aboutme = defineCollection({
    loader: file('src/content/aboutme.yaml'),
    schema: z.object({
        es: z.object({
            description: z.string(),
        }),
        en: z.object({
            description: z.string(),
        })
    })
});

const aboutthissite = defineCollection({
    loader: file('src/content/aboutthissite.yaml'),
    schema: z.object({
        es: z.object({
            description: z.string(),
        }),
        en: z.object({
            description: z.string(),
        })
    })
});

const projects = defineCollection({
    loader: glob({ base: 'src/content/projects', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        year: z.number(),
        description_brief: z.string(),
        logo: z.string(),
    })
});

const experience = defineCollection({
    loader: file('src/content/experience.yaml'),
    schema: z.object({
        date_start: z.string(),
        date_end: z.string().nullable().optional(),
        company: z.string(),
        es: z.object({
            role: z.string(),
            description: z.string(),
        }),
        en: z.object({
            role: z.string(),
            description: z.string(),
        })
    })
});

const education = defineCollection({
    loader: file('src/content/education.yaml'),
    schema: z.object({
        name: z.string(),
        date_start: z.string(),
        date_end: z.string().nullable().optional(),
        es: z.object({
            title: z.string()
        }),
        en: z.object({
            title: z.string()
        })
    })
});

const me = defineCollection({
    loader: file('src/content/me.yaml'),
    schema: z.object({
        name: z.string(),
        lastname: z.string(),
        year_old: z.number(),
        city: z.string(),
        country: z.string(),
        email: z.email(),
        social: z.object({
            github: z.object({
                username: z.string(),
                url: z.url(),
            }),
            linkedin: z.object({
                username: z.string(),
                url: z.url(),
            }),
        })
    })
});


export const collections = { aboutme, aboutthissite, projects, experience, education, me };
    
        