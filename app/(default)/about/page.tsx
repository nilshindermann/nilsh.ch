import Countdown from '@/components/countdown/countdown';
import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Über mich - Nils Hindermann',
    description:
        'Nils Hindermann ist ein Schweizer Softwareentwickler aus Zürich.',
};

export default function AboutPage(): ReactElement {
    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">Über mich</h1>
            <p className="mb-1">
                Ich bin ein junger Softwareentwickler aus Zürich.
            </p>
            <h2 className="py-1 text-lg font-semibold">
                Zeit bis zu meinem nächsten Geburtstag
            </h2>
            <Countdown
                event={{
                    slug: 'about',
                    name: 'Geburtstag',
                    date: {
                        day: 14,
                        month: 7,
                    },
                    duration: {
                        days: 1,
                    },
                }}
            />
        </>
    );
}
