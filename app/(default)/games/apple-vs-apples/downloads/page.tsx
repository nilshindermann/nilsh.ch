import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Link from '@/components/link';

export const metadata: Metadata = {
    title: 'Downloads - Apple vs. Apples - Nils Hindermann',
    description: `Apple vs. Apples ist ein Spiel, das ich in Java entwickelt habe.
    Die ersten Ansätze habe ich im Alter von 10 Jahren gemacht.
    Das Spiel wurde mehrmals von Grund auf neu entwickelt.
    Einige Versionen sind noch vorhanden.`,
};

interface Version {
    name: string;
    url: string;
}

export default function AppleVsApplesDownloadsPage(): ReactElement {
    const latestVersion: Version = {
        name: 'Alpha 0.1 Dev Build 4',
        url: 'https://github.com/nilshindermann/AppleVsApples/releases/download/Alpha-0.1-4/Apple.vs.Apples.0.1-4-Alpha.jar',
    };

    return (
        <>
            <h2>Downloads</h2>
            <p className="mb-2">
                Hier kannst du das Spiel herunterladen. Es ist für Windows, Mac
                & Linux.
                <br />
                <i>Android, iOS, etc.</i> werden <b>nicht</b> unterstützt!
            </p>
            <div className="divider" />
            <p className="mb-2">
                Die neuste Version ist: <b>{latestVersion.name}</b>
            </p>
            <p className="mb-2">
                Du kannst sie <Link href={latestVersion.url}>hier</Link>{' '}
                herunterladen.
            </p>
            <div className="divider" />
            <p className="mb-2">
                Viel Spass! <i>Du kannst mir auch Feedback geben!</i>
            </p>
            <p className="mb-2">
                Ältere Versionen findest du im{' '}
                <Link href="/games/apple-vs-apples/archive">Archiv</Link>.
            </p>
            <p className="mb-2">
                Dieses Spiel wurde in Java programmiert.
                <br />
                Stelle sicher, dass <b>Java 8</b> installiert ist!{' '}
                <Link href="https://www.java.com/de/download/">
                    Downloade hier
                </Link>
            </p>
            <p>
                Danke an <b>El. Sp.</b> & <b>Lo. Le.</b> für Ideen und
                Unterstützung!
            </p>
        </>
    );
}
