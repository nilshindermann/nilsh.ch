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
