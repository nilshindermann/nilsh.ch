import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import { versions } from '@/data/applevsapples/versions';
import Link from '@/components/link';

export const metadata: Metadata = {
    title: 'Archiv - Apple vs. Apples - Nils Hindermann',
    description: `Apple vs. Apples ist ein Spiel, das ich in Java entwickelt habe.
    Die ersten Ansätze habe ich im Alter von 10 Jahren gemacht.
    Das Spiel wurde mehrmals von Grund auf neu entwickelt.
    Einige Versionen sind noch vorhanden.`,
};

export default function AppleVsApplesArchivePage(): ReactElement {
    return (
        <>
            <h2>Archiv</h2>
            <p>Willkommen im Archiv!</p>
            <p className="mt-3">
                Hier findest du alle Versionen des Spiels, die es jemals gegeben
                hat!
            </p>
            <h3 className="text-info mt-3 text-lg">Vollversionen</h3>
            <ul className="list">
                <li className="list-row">nichts vorhanden.</li>
            </ul>
            <h3 className="text-info mt-3 text-lg">Testversionen</h3>
            <ul className="list">
                {versions.map((version) => (
                    <li key={version.name} className="list-row">
                        <div className="list-col-grow">
                            <Link href={version.download}>{version.name}</Link>
                        </div>
                        <div>{version.date.toLocaleString([])}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}
