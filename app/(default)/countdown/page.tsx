import EventSelect from '@/components/countdown/event-select';
import { ReactElement } from 'react';

import { events } from './events';

export default function CountdownPage(): ReactElement {
    return (
        <>
            <h1>Countdown</h1>
            <p>
                Willkommen auf der Countdown-Seite. Hier kannst du ein Ereignis
                auswählen, für das du einen Countdown sehen möchtest.
            </p>
            <div className="mt-5">
                <EventSelect events={events} basePath="/countdown" />
            </div>
        </>
    );
}
