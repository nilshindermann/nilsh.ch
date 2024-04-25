import dayjs, { Dayjs } from 'dayjs';
import locale_de from 'dayjs/locale/de';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// DayJS Plugins
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

export default interface EventDate {
    day: number;
    month: number;
    year?: number;
}

export const getDayJsFromEvent = (eventDate: EventDate): Dayjs => {
    if (eventDate.year) {
        return dayjs()
            .locale(locale_de)
            .year(eventDate.year!)
            .month(eventDate.month - 1)
            .date(eventDate.day)
            .hour(0)
            .minute(0)
            .second(0)
            .millisecond(0);
    } else {
        const now: Dayjs = dayjs(new Date());
        const target: Dayjs = dayjs()
            .locale(locale_de)
            .year(now.year())
            .month(eventDate.month - 1)
            .date(eventDate.day)
            .hour(0)
            .minute(0)
            .second(0)
            .millisecond(0);

        return now.isAfter(target) ? target.add(1, 'year') : target;
    }
};
