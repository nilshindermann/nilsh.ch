'use client';

import EventDate, { getDateFromEvent } from '@/models/EventDate';
import { CSSProperties, ReactElement, useEffect, useState } from 'react';

interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({
    event,
}: {
    event: EventDate;
}): ReactElement {
    const calcTime = (): Time => {
        const date = getDateFromEvent(event).getTime();
        const now = new Date().getTime();
        const distance = date - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {
            days: Math.abs(days),
            hours: Math.abs(hours),
            minutes: Math.abs(minutes),
            seconds: Math.abs(seconds),
        };
    };

    const [time, setTime] = useState<Time>(calcTime);

    useEffect(() => {
        const interval = setInterval(() => setTime(calcTime), 1000);

        return () => {
            clearInterval(interval);
        };
    }, [calcTime]);

    return (
        <div className="grid auto-cols-max grid-flow-col gap-2 text-center sm:gap-3 lg:gap-4">
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown-days countdown font-mono text-5xl">
                    <span
                        style={{ '--value': time.days } as CSSProperties}
                    ></span>
                </span>
                Tage
            </div>
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span
                        style={{ '--value': time.hours } as CSSProperties}
                    ></span>
                </span>
                Std
            </div>
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span
                        style={{ '--value': time.minutes } as CSSProperties}
                    ></span>
                </span>
                Min
            </div>
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span
                        style={{ '--value': time.seconds } as CSSProperties}
                    ></span>
                </span>
                Sek
            </div>
        </div>
    );
}
