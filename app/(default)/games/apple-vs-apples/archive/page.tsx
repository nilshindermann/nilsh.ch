import { Metadata } from 'next';
import React, { ReactElement } from 'react';

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
        </>
    );
}
