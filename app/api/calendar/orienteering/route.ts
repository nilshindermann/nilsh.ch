import { format, toZonedTime } from 'date-fns-tz';
import ical from 'ical';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    const start: Date = searchParams.has('start') ?  new Date(searchParams.get('start')!) : new Date();
    const end: Date = searchParams.has('end') ?  new Date(searchParams.get('end')!) : new Date();
    const year: number = Math.max(start.getFullYear(), end.getFullYear());
    const timeZone: string = searchParams.get('timeZone') ?? 'UTC';

    const calendarIcs = await fetch(
        `https://www.o-l.ch/cgi-bin/fixtures?&year=${year}&kind=-1&ics=1`,
    );
    const calendar = await calendarIcs.text();

    try {
        const parsedData = ical.parseICS(calendar);
        const events = Object.values(parsedData)
            .filter(
                (event) =>
                    event.type === 'VEVENT' &&
                    event.categories?.includes('Foot'),
            )
            .map((event) => {
                const startDate = new Date(event.start!);
                const endDate = new Date(event.end!);

                const zonedStartDate = toZonedTime(startDate, timeZone);
                const zonedEndDate = toZonedTime(endDate, timeZone);

                const startISO = format(
                    zonedStartDate,
                    "yyyy-MM-dd'T'HH:mm:ssXXX",
                    { timeZone },
                );
                const endISO = format(
                    zonedEndDate,
                    "yyyy-MM-dd'T'HH:mm:ssXXX",
                    { timeZone },
                );

                return {
                    start: startISO,
                    end: endISO,
                    title: event.summary,
                    url: event.url,
                    location: event.location,
                    allDay: startISO.includes('T00:00:00') && endISO.includes('T00:00:00'),
                };
            });
        return Response.json(events);
    } catch (error) {
        return Response.json(
            { error: 'Failed to parse ICS data' },
            { status: 500, statusText: 'Internal Server Error' },
        );
    }
}
