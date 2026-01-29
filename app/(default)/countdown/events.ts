import { CountdownEvent } from '@/models/events';

export const events: Array<CountdownEvent> = [
    {
        slug: 'new-year',
        name: 'Neujahr',
        date: '0000-01-01T00:00:00',
        duration: 'P1D',
    },
    {
        slug: 'may-the-fourth',
        name: 'Star Wars Day',
        date: '0000-05-04T00:00:00',
        duration: 'P1D',
    },
    {
        slug: 'nils',
        name: 'Geburtstag von Nils Hindermann',
        date: '0000-07-14T00:00:00',
        duration: 'P1D',
    },
    {
        slug: 'august',
        name: '1. August',
        date: '0000-08-01T00:00:00',
        duration: 'P1D',
    },
    {
        slug: 'x-mas',
        name: 'Weihnachten',
        date: '0000-12-24T00:00:00',
        duration: 'P2D',
    },
    {
        slug: 'Y2K38',
        name: 'Jahr-2038-Problem',
        date: '2038-01-19T03:14:08Z',
        duration: 'P1H',
    },
];
