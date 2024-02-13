'use client';

import { ReactElement, useEffect, useState } from 'react';

export default function Countdown(): ReactElement {
    const [time, setTime] = useState({
        days: 365,
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const date = new Date(2024, 6, 14).getTime();
            const distance = date - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60),
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown-days countdown font-mono text-5xl">
                    <span style={{ '--value': time.days }}></span>
                </span>
                Tage
            </div>
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ '--value': time.hours }}></span>
                </span>
                Std
            </div>
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ '--value': time.minutes }}></span>
                </span>
                Min
            </div>
            <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ '--value': time.seconds }}></span>
                </span>
                Sek
            </div>
        </div>
    );
}
