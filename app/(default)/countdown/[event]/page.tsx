import Countdown from '@/components/countdown/Countdown';
import EventSelect from '@/components/countdown/EventSelect';
import CountdownEvent from '@/models/CountdownEvent';
import { getDayJsFromEvent } from '@/models/EventDate';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

import { events } from '../events';

interface Props {
    params: Promise<{ event: string }>;
}

function findEvent(slug: string): CountdownEvent | undefined {
    return events.find((e) => e.slug === slug);
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const event = findEvent(params.event);

    if (!event) {
        notFound();
    }

    return {
        title: `${event.name} - Countdown - Nils Hindermann`,
        description: `${event.name}. Der Countdown läuft.`,
    };
}

export default async function CountdownPage(
    props: Props,
): Promise<ReactElement> {
    const params = await props.params;
    const event = findEvent(params.event);

    if (!event) {
        notFound();
    }

    const formattedDate: string = getDayJsFromEvent(event.date).format('LL');

    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">
                {event.name}
            </h1>
            <Countdown event={event.date} />
            <p className="my-2">{formattedDate}</p>
            <EventSelect events={events} current={event} />
        </>
    );
}
