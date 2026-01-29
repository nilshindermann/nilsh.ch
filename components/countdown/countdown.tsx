'use client';

import dayjs, { Dayjs } from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';
import {
    CSSProperties,
    ReactElement,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { formatDate, getDayJsFromEvent } from '@/lib/events';
import { CountdownEvent } from '@/models/events';

interface DisplayTime {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    formattedDate: string;
}

interface CountdownProps {
    event: CountdownEvent;
    showDate?: boolean;
}

export default function Countdown({
    event,
    showDate = false,
}: CountdownProps): ReactElement {
    const calcTime = useCallback((): DisplayTime => {
        const then: Dayjs = getDayJsFromEvent(event);
        const now: Dayjs = dayjs(); // Timezone?
        const diff: Duration = dayjs.duration(then.diff(now));

        const years = diff.years();
        const months = diff.months();
        const days = diff.days();
        const hours = diff.hours();
        const minutes = diff.minutes();
        const seconds = diff.seconds();
        const formattedDate = formatDate(then);

        return {
            years: Math.abs(years),
            months: Math.abs(months),
            days: Math.abs(days),
            hours: Math.abs(hours),
            minutes: Math.abs(minutes),
            seconds: Math.abs(seconds),
            formattedDate: formattedDate,
        };
    }, [event]);

    const [time, setTime] = useState<DisplayTime>(calcTime);

    useEffect(() => {
        const interval = setInterval(() => setTime(calcTime), 1000);
        return () => clearInterval(interval);
    }, [calcTime]);

    return (
        <>
            <div className="max-w-full overflow-x-auto">
                <div className="grid auto-cols-max grid-flow-col gap-2 text-center">
                    {time.years > 0 && (
                        <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                            <span className="countdown justify-center font-mono text-5xl">
                                <span
                                    style={
                                        {
                                            '--value': time.years,
                                        } as CSSProperties
                                    }
                                    aria-live="polite"
                                    aria-label={time.years.toString()}
                                >
                                    {time.years}
                                </span>
                            </span>
                            {time.years == 1 ? 'Jahr' : 'Jahre'}
                        </div>
                    )}
                    {time.months > 0 && (
                        <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                            <span className="countdown justify-center font-mono text-5xl">
                                <span
                                    style={
                                        {
                                            '--value': time.months,
                                        } as CSSProperties
                                    }
                                    aria-live="polite"
                                    aria-label={time.months.toString()}
                                >
                                    {time.months}
                                </span>
                            </span>
                            {time.months == 1 ? 'Monat' : 'Monate'}
                        </div>
                    )}
                    {time.days > 0 && (
                        <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                            <span className="countdown justify-center font-mono text-5xl">
                                <span
                                    style={
                                        {
                                            '--value': time.days,
                                        } as CSSProperties
                                    }
                                    aria-live="polite"
                                    aria-label={time.days.toString()}
                                >
                                    {time.days}
                                </span>
                            </span>
                            {time.days == 1 ? 'Tag' : 'Tage'}
                        </div>
                    )}
                    <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                        <span className="countdown justify-center font-mono text-5xl">
                            <span
                                style={
                                    {
                                        '--value': time.hours,
                                        '--digits': 2,
                                    } as CSSProperties
                                }
                                aria-live="polite"
                                aria-label={time.hours.toString()}
                            >
                                {time.hours}
                            </span>
                        </span>
                        Std
                    </div>
                    <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                        <span className="countdown justify-center font-mono text-5xl">
                            <span
                                style={
                                    {
                                        '--value': time.minutes,
                                        '--digits': 2,
                                    } as CSSProperties
                                }
                                aria-live="polite"
                                aria-label={time.minutes.toString()}
                            >
                                {time.minutes}
                            </span>
                        </span>
                        Min
                    </div>
                    <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                        <span className="countdown justify-center font-mono text-5xl">
                            <span
                                style={
                                    {
                                        '--value': time.seconds,
                                        '--digits': 2,
                                    } as CSSProperties
                                }
                                aria-live="polite"
                                aria-label={time.seconds.toString()}
                            >
                                {time.seconds}
                            </span>
                        </span>
                        Sek
                    </div>
                </div>
            </div>
            {showDate && <p className="my-2">{time.formattedDate}</p>}
        </>
    );
}
