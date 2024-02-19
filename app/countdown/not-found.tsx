import EventSelect from '@/components/countdown/EventSelect';
import { Metadata } from 'next';
import React, { ReactElement } from 'react';

import { events } from './events';

export const metadata: Metadata = {
    title: '404 - Nils Hindermann',
    description: 'The requested event could not be found.',
};

export default function EventNotFoundPage(): ReactElement {
    return (
        <>
            <h1 className="mb-10 text-6xl font-bold">404</h1>
            <p className="text-xl">The requested event could not be found.</p>
            <EventSelect events={events} />
        </>
    );
}
