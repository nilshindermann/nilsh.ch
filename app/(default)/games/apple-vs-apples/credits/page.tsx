import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import CreditsList, { Credit } from '@/components/credits-list';

export const metadata: Metadata = {
    title: 'Credits - Apple vs. Apples - Nils Hindermann',
    description: `Apple vs. Apples ist ein Spiel, das ich in Java entwickelt habe.
    Die ersten Ansätze habe ich im Alter von 10 Jahren gemacht.
    Das Spiel wurde mehrmals von Grund auf neu entwickelt.
    Einige Versionen sind noch vorhanden.`,
};

const credits: Array<Credit> = [
    { name: 'Nils Hindermann', role: 'Entwicklung' },
    { name: 'El. Sp.', role: 'Ideen' },
    { name: 'Lo. Le.', role: 'Ideen' },
];

export default function AppleVsApplesCreditsPage(): ReactElement {
    return <CreditsList credits={credits} />;
}
