import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl: string =
        process.env.BASE_URL ??
        process.env.CF_PAGES_URL ??
        'https://www.nilsh.ch';

    return [
        {
            url: baseUrl,
        },
        {
            url: baseUrl + '/about',
        },
        {
            url: baseUrl + '/contact',
        },
        {
            url: baseUrl + '/orienteering',
        },
        {
            url: baseUrl + '/projects',
        },
        {
            url: baseUrl + '/countdown',
        },
    ];
}
