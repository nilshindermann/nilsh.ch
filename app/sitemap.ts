import { MetadataRoute } from 'next';
import { join } from 'path';

import { events } from '@/app/(default)/countdown/events';
import { getStaticRoutes } from '@/lib/routes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl: string = process.env.BASE_URL ?? 'https://www.nilsh.ch';

    const staticRoutes = getStaticRoutes(
        join(process.cwd(), 'app', '(default)'),
    );
    const countdownRoutes = events.map((event) => `/countdown/${event.slug}`);

    return [...staticRoutes, ...countdownRoutes].map((route) => ({
        url: route === '/' ? baseUrl : baseUrl + route,
    }));
}
