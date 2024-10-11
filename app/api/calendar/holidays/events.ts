import { EventSourceInput } from '@fullcalendar/core/index.js';

interface EventNameDto {
    language: string;
    text: string;
}

interface EventDto {
    id: string;
    startDate: string;
    endDate: string;
    type: string;
    name: EventNameDto[];
    nationwide: boolean;
    subdivisions: {
        code: string;
        shortName: string;
    }[];
}

export async function getEvents(
    type: 'SchoolHolidays' | 'PublicHolidays',
    start: string,
    end: string,
): Promise<EventSourceInput> {
    const response = await fetch(
        `https://openholidaysapi.org/${type}?countryIsoCode=CH&languageIsoCode=DE&subdivisionCode=CH-ZH&validFrom=${start}&validTo=${end}`,
    );
    const events = await response.json();

    return events.map((event: EventDto) => {
        return {
            title: event.name.find((name) => name.language === 'DE')?.text,
            start: event.startDate,
            end: event.endDate,
            allDay: true,
        };
    });
}
