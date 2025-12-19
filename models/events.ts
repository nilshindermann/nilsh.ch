export interface EventDate {
    day: number;
    month: number;
    year?: number;
    hour?: number;
    minute?: number;
    second?: number;
}

export interface EventDuration {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

export interface CountdownEvent {
    slug: string;
    name: string;
    date: EventDate;
    duration?: EventDuration;
}
