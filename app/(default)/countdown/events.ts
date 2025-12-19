import { CountdownEvent } from '@/models/events';

export const events: Array<CountdownEvent> = [
    {
        slug: 'new-year',
        name: 'Neujahr',
        date: {
            day: 1,
            month: 1,
        },
    },
    {
        slug: 'may-the-fourth',
        name: 'Star Wars Day',
        date: {
            day: 4,
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
        slug: 'august',
        name: '1. August',
        date: {
            day: 24,
            month: 12,
        },
    },
    {
        slug: 'x-mas',
        name: 'Weihnachten',
        date: {
            day: 24,
            month: 12,
        },
    },
    {
        slug: 'Y2K38',
        name: 'Jahr-2038-Problem',
        date: {
            day: 19,
            month: 1,
            year: 2038,
        },
    },
];
