import { defineCollection} from 'astro:content';
import { z } from 'zod';
import { file } from 'astro/loaders'
import { date, email } from 'astro:schema';





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

const projects = defineCollection({
    loader: file('src/content/projects.yaml'),
    schema: z.object({
        year: z.number(),
        es: z.object({
            title: z.string(),
            description: z.string(),
        }),
        en: z.object({
            title: z.string(),
            description: z.string(),
        })
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


export const collections = { aboutme, projects, experience, education, me };
    
        