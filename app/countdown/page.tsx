import EventSelect from '@/components/countdown/EventSelect';
import React from 'react';

import { events } from './events';

export default function CountdownPage() {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Countdown</h1>
            <p>
                Willkommen auf der Countdown-Seite. Hier kannst du ein Ereignis
                auswählen, für das du einen Countdown sehen möchtest.
            </p>
            <div className="mt-5">
                <EventSelect events={events} />
            </div>
        </>
    );
}
