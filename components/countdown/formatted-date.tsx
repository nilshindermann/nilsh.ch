'use client';
import dayjs from 'dayjs';

interface FormattedDateProps {
    date: string;
}

export const FormattedDate = ({ date }: FormattedDateProps) => {
    return (
        <p className="my-2">{dayjs(date).tz(dayjs.tz.guess()).format('LLL')}</p>
    );
};
