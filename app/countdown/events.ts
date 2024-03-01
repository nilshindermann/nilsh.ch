import CountdownEvent from '@/models/CountdownEvent';
import EventDate from '@/models/EventDate';

export const events: Array<CountdownEvent> = [
    {
        slug: 'corina',
        name: 'Geburtstag von Corina Pünter',
        date: {
            day: 6,
            month: 3,
        },
    },
    {
        slug: 'elisa',
        name: 'Geburtstag von Elisa Spano',
        date: {
            day: 12,
            month: 4,
        },
    },
    {
        slug: 'darina',
        name: 'Geburtstag von Darina Schweizer',
        date: {
            day: 7,
            month: 5,
        },
    },
    {
        slug: 'nils',
        name: 'Geburtstag von Nils Hindermann',
        date: {
            day: 14,
            month: 7,
        },
    },
    {
        slug: 'kiana',
        name: 'Geburtstag von Kiana Kuhn',
        date: {
            day: 20,
            month: 7,
        },
    },
    {
        slug: 'julia',
        name: 'Geburtstag von Julia Rudolf',
        date: {
            day: 29,
            month: 9,
        },
    },
    {
        slug: 'joana',
        name: 'Geburtstag von Joana Schlatter',
        date: {
            day: 3,
            month: 12,
        },
    },
];

export const getDateFromEvent = (eventDate: EventDate): Date => {
    if (eventDate.year) {
        return new Date(eventDate.year!, eventDate.month - 1, eventDate.day);
    } else {
        const now = new Date();
        const year: number = now.getFullYear();
        const target = new Date(year, eventDate.month - 1, eventDate.day);

        return now > target
            ? new Date(year + 1, eventDate.month - 1, eventDate.day)
            : target;
    }
};
