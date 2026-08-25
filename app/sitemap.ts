import { MetadataRoute } from 'next';

import { events } from '@/app/(default)/countdown/events';

export const dynamic = 'force-static';

const staticRoutes: Array<string> = [
    '/',
    '/about',
    '/contact',
    '/countdown',
    '/games',
    '/games/apple-vs-apples',
    '/games/apple-vs-apples/archive',
    '/games/apple-vs-apples/credits',
    '/games/apple-vs-apples/downloads',
    '/games/catch-me-if-you-can',
    '/games/catch-me-if-you-can/credits',
    '/games/catch-me-if-you-can/downloads',
    '/games/covid-game',
    '/games/covid-game/credits',
    '/games/covid-game/downloads',
    '/games/drag-droppy',
    '/games/drag-droppy/credits',
    '/geocaching',
    '/imprint',
    '/orienteering',
    '/privacy',
    '/projects',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl: string = process.env.BASE_URL ?? 'https://www.nilsh.ch';
    const countdownRoutes = events.map((event) => `/countdown/${event.slug}`);

    return [...staticRoutes, ...countdownRoutes].map((route) => ({
        url: route === '/' ? baseUrl : baseUrl + route,
    }));
}
