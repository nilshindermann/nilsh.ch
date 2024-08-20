import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Games - Nils Hindermann',
    description:
        'Einige Spiele, die ich entwickelt habe. Unter anderem das Covid Game und Drag Droppy.',
};

export default function GamesPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Games</h1>
            <p>
                Hier findest du einige Spiele, die ich entwickelt habe. Unter
                anderem das Covid Game und Drag Droppy.
            </p>

            <p>
                <ul>
                    <li>
                        <Link href="/games/apple-vs-apples">
                            Apple vs. Apples
                        </Link>
                    </li>
                    <li>
                        <Link href="/games/covid-game">Covid Game</Link>
                    </li>
                    <li>
                        <Link href="/games/drag-droppy">Drag Droppy</Link>
                    </li>
                </ul>
            </p>
        </>
    );
}
