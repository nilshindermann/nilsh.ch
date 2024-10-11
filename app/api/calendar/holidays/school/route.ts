import { NextRequest } from 'next/server';

import { getEvents } from '../events';

export async function GET(request: NextRequest): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    const holidays = await getEvents(
        'SchoolHolidays',
        searchParams.get('start') ?? '2024-01-01',
        searchParams.get('end') ?? '2024-12-31',
    );
    return Response.json(holidays, { headers });
}
