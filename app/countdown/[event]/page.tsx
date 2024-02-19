import Countdown from '@/components/countdown/Countdown';
import EventSelect from '@/components/countdown/EventSelect';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

import { events } from '../events';

export const metadata: Metadata = {
    title: 'Countdown - Nils Hindermann',
    description: 'The final countdown!',
};

export default function CountdownPage({
    params,
}: {
    params: { event: string };
}): ReactElement {
    const event = events.find((e) => e.slug === params.event);

    if (!event) {
        notFound();
    }

    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">
                {event.name}
            </h1>
            <Countdown event={event.date} />
            <EventSelect events={events} current={event} />
        </>
    );
}
