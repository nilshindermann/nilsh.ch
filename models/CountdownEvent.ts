import EventDate from './EventDate';

export default interface CountdownEvent {
    slug: string;
    name: string;
    date: EventDate;
}
