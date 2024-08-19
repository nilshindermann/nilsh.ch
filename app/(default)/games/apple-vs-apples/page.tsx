import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Apple vs. Apples - Nils Hindermann',
    description: `Apple vs. Apples ist ein Spiel, das ich in Java entwickelt habe.
    Die ersten Ansätze habe ich im Alter von 10 Jahren gemacht.
    Das Spiel wurde mehrmals von Grund auf neu entwickelt.
    Einige Versionen sind noch vorhanden.`,
};

export default function ProjectsPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">
                Apple vs. Apples
            </h1>
            <p>
                <b>Apple vs. Apples</b> ist ein Spiel, das ich in Java
                entwickelt habe. Die ersten Ansätze habe ich im Alter von 10
                Jahren gemacht. Das Spiel wurde mehrmals von Grund auf neu
                entwickelt. Einige Versionen sind noch vorhanden. Es ist ein
                Einzelspieler-Spiel, bei dem man gegen Äpfel kämpft. Dazu kann
                man Münzen sammeln und später im Shop Upgrades kaufen.
                Allerdings ist der Shop noch nicht implementiert.
            </p>
            <p>
                Bis diese Seite noch nicht fertig ist, kannst du das Spiel auf{' '}
                <a
                    href="applevsapples.nilsh.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    applevsapples.nilsh.ch
                </a>{' '}
                herunterladen.
            </p>
        </>
    );
}
