'use client';

import EventDate, { getDayJsFromEvent } from '@/models/EventDate';
import dayjs, { Dayjs } from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';
import {
    CSSProperties,
    ReactElement,
    useCallback,
    useEffect,
    useState,
} from 'react';

interface DisplayTime {
    years: number;
    months: number;
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
    const calcTime = useCallback((): DisplayTime => {
        const now: Dayjs = dayjs(new Date()).utc();
        const then: Dayjs = getDayJsFromEvent(event).utc();
        const diff: Duration = dayjs.duration(then.diff(now));

        const years = diff.years();
        const months = diff.months();
        const days = diff.days();
        const hours = diff.hours();
        const minutes = diff.minutes();
        const seconds = diff.seconds();

        return {
            years: Math.abs(years),
            months: Math.abs(months),
            days: Math.abs(days),
            hours: Math.abs(hours),
            minutes: Math.abs(minutes),
            seconds: Math.abs(seconds),
        };
    }, [event]);

    const [time, setTime] = useState<DisplayTime>(calcTime);

    useEffect(() => {
        const interval = setInterval(() => setTime(calcTime), 1000);

        return () => {
            clearInterval(interval);
        };
    }, [calcTime]);

    return (
        <div className="grid auto-cols-max grid-flow-col gap-2 text-center sm:gap-3 lg:gap-4">
            {time.years > 0 && (
                <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span
                            style={{ '--value': time.years } as CSSProperties}
                        ></span>
                    </span>
                    Jahre
                </div>
            )}
            {time.months > 0 && (
                <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span
                            style={{ '--value': time.months } as CSSProperties}
                        ></span>
                    </span>
                    Monate
                </div>
            )}
            {time.days > 0 && (
                <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span
                            style={{ '--value': time.days } as CSSProperties}
                        ></span>
                    </span>
                    Tage
                </div>
            )}
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
