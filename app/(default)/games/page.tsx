import { Metadata } from 'next';
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
                        <a href="/games/apple-vs-apples">Apple vs. Apples</a>
                    </li>
                    <li>
                        <a href="/games/covid-game">Covid Game</a>
                    </li>
                    <li>
                        <a href="/games/drag-droppy">Drag Droppy</a>
                    </li>
                </ul>
            </p>
        </>
    );
}
