import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Credits - Apple vs. Apples - Nils Hindermann',
    description: `Apple vs. Apples ist ein Spiel, das ich in Java entwickelt habe.
    Die ersten Ansätze habe ich im Alter von 10 Jahren gemacht.
    Das Spiel wurde mehrmals von Grund auf neu entwickelt.
    Einige Versionen sind noch vorhanden.`,
};

interface Credit {
    name: string;
    role: string;
}

const credits: Array<Credit> = [
    { name: 'Nils Hindermann', role: 'Entwicklung' },
    { name: 'El. Sp.', role: 'Ideen' },
    { name: 'Lo. Le.', role: 'Ideen' },
];

export default function AppleVsApplesCreditsPage(): ReactElement {
    return (
        <>
            <h2>Credits</h2>
            <p className="mb-2">
                Diese Leute haben zu diesem Spiel beigetragen:
            </p>
            <ul className="list">
                {credits.map((credit) => (
                    <li key={credit.name} className="list-row">
                        <div className="list-col-grow">{credit.name}</div>
                        <div>{credit.role}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}
