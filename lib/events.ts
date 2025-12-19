import dayjs, { Dayjs } from 'dayjs';
import locale_de from 'dayjs/locale/de';
import duration, { Duration } from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { CountdownEvent } from '@/models/events';

// DayJS Plugins
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

export const getDayJsFromEvent = (
    event: CountdownEvent,
    nowTime?: Dayjs,
): Dayjs => {
    const eventDate = event.date;

    const now: Dayjs = nowTime ?? dayjs(new Date());
    const target: Dayjs = dayjs()
        .locale(locale_de)
        .year(eventDate.year ?? now.year())
        .month(eventDate.month - 1)
        .date(eventDate.day)
        .hour(eventDate.hour ?? 0)
        .minute(eventDate.minute ?? 0)
        .second(eventDate.second ?? 0)
        .millisecond(0);

    const eventEnd: Dayjs = dayjs(target)
        .add(event.duration?.days ?? 0, 'days')
        .add(event.duration?.hours ?? 0, 'hours')
        .add(event.duration?.minutes ?? 0, 'minutes')
        .add(event.duration?.seconds ?? 0, 'seconds');

    if (now.isBefore(target)) {
        // current time is before the event
        return target;
    }

    if (now.isBefore(eventEnd)) {
        // current time is during the event (current year)
        return now;
    }

    return eventDate.year ? now : target.add(1000 * 60 * 60 * 24 * 365);
};

export const formatEventDate = (event: CountdownEvent): string => {
    if (
        event.date.hour !== undefined ||
        event.date.minute !== undefined ||
        event.date.second !== undefined
    ) {
        return getDayJsFromEvent(event).format('LLL');
    }

    return getDayJsFromEvent(event).format('LL');
};
