import EventSelect from '@/components/countdown/EventSelect';
import { Metadata } from 'next';
import React, { ReactElement } from 'react';

import { events } from './events';

export const metadata: Metadata = {
    title: '404 - Nils Hindermann',
    description: 'Das gewünschte Ereignis konnte nicht gefunden werden.',
};

export default function EventNotFoundPage(): ReactElement {
    return (
        <>
            <h1 className="mb-10 text-6xl font-bold">404</h1>
            <p className="text-xl">
                Das angegebene Ereignis konnte nicht gefunden werden. Bitte
                wähle ein anderes Ereignis aus.
            </p>
            <EventSelect events={events} />
        </>
    );
}
