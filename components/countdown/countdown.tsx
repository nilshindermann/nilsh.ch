'use client';

import dayjs, { Dayjs } from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { formatDate, getDayJsFromEvent } from '@/lib/events';
import { CountdownEvent } from '@/models/events';
import Counter from '@/components/countdown/counter';

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
        const now: Dayjs = dayjs();
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
                    <Counter
                        count={time.years}
                        textSingular="Jahr"
                        textPlural="Jahre"
                    />
                    <Counter
                        count={time.months}
                        textSingular="Monat"
                        textPlural="Monate"
                    />
                    <Counter
                        count={time.days}
                        textSingular="Tag"
                        textPlural="Tage"
                    />
                    <Counter
                        count={time.hours}
                        textSingular="Std"
                        digits={2}
                        alwaysVisible={true}
                    />
                    <Counter
                        count={time.minutes}
                        textSingular="Min"
                        digits={2}
                        alwaysVisible={true}
                    />
                    <Counter
                        count={time.seconds}
                        textSingular="Sek"
                        digits={2}
                        alwaysVisible={true}
                    />
                </div>
            </div>
            {showDate && <p className="my-2">{time.formattedDate}</p>}
        </>
    );
}
