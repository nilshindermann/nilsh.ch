import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl: string =
        process.env.BASE_URL ??
        process.env.CF_PAGES_URL ??
        'https://www.nilsh.ch';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: baseUrl + '/sitemap.xml',
    };
}
