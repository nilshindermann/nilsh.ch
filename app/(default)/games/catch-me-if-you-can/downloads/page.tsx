import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Catch Me If You Can - Nils Hindermann',
    description: `Apple vs. Apples ist ein Spiel, das ich in Java entwickelt habe.
    Die ersten Ansätze habe ich im Alter von 10 Jahren gemacht.
    Das Spiel wurde mehrmals von Grund auf neu entwickelt.
    Einige Versionen sind noch vorhanden.`,
};

export default function AppleVsApplesPage(): ReactElement {
    return (
        <>
            <h2>Downloads</h2>
            <Image
                width={308}
                height={380}
                src="/assets/games/catch_me_if_you_can_logo.webp"
                alt="Catch Me If You Can"
            />
            <p>Download noch nicht verfügbar.</p>
        </>
    );
}
