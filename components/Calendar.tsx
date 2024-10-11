'use client';

import { EventSourceInput } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import React, { ReactElement } from 'react';

export default function Calendar(): ReactElement {
    const eventSource: EventSourceInput[] = [
        {
            url: '/api/calendar/holidays/school',
            color: 'skyBlue',
            textColor: 'black',
        },
        {
            url: '/api/calendar/holidays/public',
            color: 'black',
            textColor: 'white',
        },
        {
            url: '/api/calendar/orienteering',
            color: 'orange',
            textColor: 'black',
        },
    ];

    return (
        <div className="w-full">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                eventSources={eventSource}
                firstDay={1} // Monday
                headerToolbar={{
                    left: 'prev,next today',
                    right: 'title',
                }}
                footerToolbar={{
                    right: 'dayGridMonth,dayGridWeek,timeGridDay,timeGridWeek',
                }}
                locale="de"
                timeZone="Europe/Zurich"
                weekNumbers={true}
                weekNumberContent={(arg) => {
                    return `KW ${arg.num}`;
                }}
                navLinks={true}
                navLinkHint={(arg) => "Gehe zu " + arg}
            />
        </div>
    );
}
