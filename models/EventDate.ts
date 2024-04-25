import dayjs from 'dayjs';
import locale_de from 'dayjs/locale/de';
import duration from 'dayjs/plugin/duration';
import LocalizedFormat from 'dayjs/plugin/LocalizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// DayJS Plugins
dayjs.extend(LocalizedFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

export default interface EventDate {
    day: number;
    month: number;
    year?: number;
}

export const getDateFromEvent = (eventDate: EventDate): Date => {
    if (eventDate.year) {
        return new Date(eventDate.year!, eventDate.month - 1, eventDate.day);
    } else {
        const now = new Date();
        const year: number = now.getFullYear();
        const target = new Date(year, eventDate.month - 1, eventDate.day);

        return now > target
            ? new Date(year + 1, eventDate.month - 1, eventDate.day)
            : target;
    }
};

export const getDayJsFromEvent = (eventDate: EventDate): dayjs.Dayjs => {
    return dayjs(getDateFromEvent(eventDate)).locale(locale_de);
};
