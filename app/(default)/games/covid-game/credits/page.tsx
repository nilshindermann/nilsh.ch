import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import CreditsList, { Credit } from '@/components/credits-list';

export const metadata: Metadata = {
    title: 'Credits - Covid Game',
    description: `Covid Game ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich einen Jurypreis beim Lehrlingswettbewerb Züri-Oberland 2021 gewonnen.`,
};

const credits: Array<Credit> = [
    { name: 'Nils Hindermann', role: 'Entwicklung' },
    {
        name: 'azo ausbildungszentrum zürcher oberland',
        role: 'Hardware, Ausbildung, Support',
    },
];

export default function CovidGameCreditsPage(): ReactElement {
    return <CreditsList credits={credits} />;
}
