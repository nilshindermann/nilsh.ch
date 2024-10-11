import Calendar from '@/components/Calendar';
import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Kalender - Nils Hindermann',
    description:
        'Alle Termine von Nils Hindermann, die öffentlich sind. Unter anderem auch die Termine von Orientierungslauf- und Geocaching-Events.',
    openGraph: {
        type: 'website',
        url: 'https://www.nilsh.ch/calendar',
        title: 'Kalender von Nils Hindermann',
        description:
            'Alle Termine von Nils Hindermann, die öffentlich sind. Unter anderem auch die Termine von Orientierungslauf- und Geocaching-Events.',
    },
    twitter: {
        card: 'summary',
        site: '@nilshindermann',
        title: 'Kalender von Nils Hindermann',
        description:
            'Alle Termine von Nils Hindermann, die öffentlich sind. Unter anderem auch die Termine von Orientierungslauf- und Geocaching-Events.',
    },
};

export default async function CalendarPage(): Promise<ReactElement> {
    return (
        <div>
            <h1 className="mb-5 text-4xl font-bold text-primary">Kalender</h1>
            <p>
                In diesem Kalender stehen alle öffentlichen Termine. Unter anderem auch
                die Termine von Orientierungslauf- und Geocaching-Events.
            </p>
            <Calendar />
        </div>
    );
}
