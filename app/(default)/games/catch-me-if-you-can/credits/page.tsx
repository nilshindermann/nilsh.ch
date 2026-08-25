import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import CreditsList, { Credit } from '@/components/credits-list';

export const metadata: Metadata = {
    title: 'Credits - Catch Me If You Can',
    description: `Catch Me If You Can ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich am Lehrlingswettbewerb Züri-Oberland 2020 teilgenommen.`,
};

const credits: Array<Credit> = [
    { name: 'Nils Hindermann', role: 'Entwicklung' },
    { name: 'Spielhöhle Team', role: 'Ideen & Zusammenarbeit' },
    {
        name: 'azo ausbildungszentrum zürcher oberland',
        role: 'Hardware, Ausbildung, Support',
    },
];

export default function CatchMeIfYouCanCreditsPage(): ReactElement {
    return <CreditsList credits={credits} />;
}
