import dayjs, { Dayjs } from 'dayjs';
import locale_de from 'dayjs/locale/de';
import duration from 'dayjs/plugin/duration';
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

// Default locale: DE
dayjs.locale(locale_de);

export const getDayJsFromEvent = (event: CountdownEvent): Dayjs => {
    const parseDate: Dayjs = dayjs(event.date);
    const now: Dayjs = dayjs(); // Timezone?
    const isYearDefined: boolean = parseDate.year() !== 1900;
    const target: Dayjs = parseDate.set(
        'year',
        isYearDefined ? parseDate.year() : now.year(),
    );
    const eventEnd: Dayjs = dayjs(target).add(dayjs.duration(event.duration));

    if (now.isBefore(target, 'seconds')) {
        // current time is before the event
        return target;
    }

    if (now.isBefore(eventEnd, 'seconds')) {
        // current time is during the event (current year)
        return now;
    }

    return isYearDefined ? now : target.add(1, 'year');
};
