import Countdown from '@/components/countdown/countdown';
import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import CenterAlignedPage from '@/components/layout/center-aligned-page';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import { skillCategories } from '@/data/skills';

export const metadata: Metadata = {
    title: 'Über mich - Nils Hindermann',
    description:
        'Nils Hindermann ist ein Schweizer Softwareentwickler aus Zürich.',
};

const birthDate = '2004-07-14';

function getAge(): number {
    return dayjs().diff(dayjs(birthDate), 'year');
}

export default function AboutPage(): ReactElement {
    return (
        <CenterAlignedPage>
            <h1>Über mich</h1>
            <p className="mb-1">
                Ich bin Nils Hindermann, {getAge()} Jahre alt und ein junger
                Softwareentwickler aus Zürich.
            </p>

            <h2 className="py-1 text-lg font-semibold">
                Zeit bis zu meinem nächsten Geburtstag
            </h2>
            <Countdown
                event={{
                    slug: 'about',
                    name: 'Geburtstag',
                    date: '0000-07-14T00:00:00',
                    duration: 'P1D',
                }}
            />

            <h2 className="py-1 text-lg font-semibold">Skills</h2>
            <div className="flex flex-col gap-2">
                {skillCategories.map(({ category, skills }) => (
                    <div key={category}>
                        <span className="font-medium">{category}:</span>{' '}
                        {skills.join(', ')}
                    </div>
                ))}
            </div>

            <h2 className="py-1 text-lg font-semibold">Social Media</h2>
            <SocialMediaLinks />
        </CenterAlignedPage>
    );
}
