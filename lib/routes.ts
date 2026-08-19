import { Dirent, readdirSync } from 'fs';
import { join } from 'path';

function isRouteGroup(segment: string): boolean {
    return segment.startsWith('(') && segment.endsWith(')');
}

function isDynamicSegment(segment: string): boolean {
    return segment.startsWith('[') && segment.endsWith(']');
}

function hasPageFile(entries: Array<Dirent>): boolean {
    return entries.some(
        (entry) => entry.isFile() && /^page\.tsx?$/.test(entry.name),
    );
}

/**
 * Recursively discovers all statically routable pages under an App Router
 * directory. Route groups (e.g. `(legal)`) are collapsed into their parent
 * route. Dynamic segments (e.g. `[event]`) have no fixed URL and are
 * skipped, so their routes need to be supplied separately.
 */
export function getStaticRoutes(rootDir: string): Array<string> {
    const routes: Array<string> = [];

    function walk(dir: string, segments: Array<string>): void {
        const entries = readdirSync(dir, { withFileTypes: true });

        if (hasPageFile(entries)) {
            routes.push('/' + segments.join('/'));
        }

        for (const entry of entries) {
            if (!entry.isDirectory() || isDynamicSegment(entry.name)) {
                continue;
            }

            const nextSegments = isRouteGroup(entry.name)
                ? segments
                : [...segments, entry.name];

            walk(join(dir, entry.name), nextSegments);
        }
    }

    walk(rootDir, []);

    return routes.sort();
}
