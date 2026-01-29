import Countdown from '@/components/countdown/countdown';
import EventSelect from '@/components/countdown/event-select';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

import { events } from '../events';
import { getDayJsFromEvent } from '@/lib/events';
import { CountdownEvent } from '@/models/events';
import { FormattedDate } from '@/components/countdown/formatted-date';

interface Params {
    event: string;
}

interface Props {
    params: Promise<Params>;
}

function findEvent(slug: string): CountdownEvent | undefined {
    return events.find((e) => e.slug === slug);
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params: Params = await props.params;
    const event: CountdownEvent | undefined = findEvent(params.event);

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

    const eventDate = getDayJsFromEvent(event);

    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">
                {event.name}
            </h1>
            <Countdown event={event} />
            <FormattedDate date={eventDate.toJSON()} />
            <EventSelect events={events} current={event} />
        </>
    );
}
