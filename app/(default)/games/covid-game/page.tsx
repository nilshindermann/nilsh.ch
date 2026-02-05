import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Covid Game - Nils Hindermann',
    description: `Covid Game ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich einen Jurypreis beim Lehrlingswettbewerb Züri-Oberland 2021 gewonnen.`,
};

export default function CovidGamePage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Covid Game</h1>
            <p>
                Das <b>Covid Game</b> ist ein Spiel, das ich während der
                Corona-Pandemie entwickelt habe. Es handelt sich um ein
                einfaches Spiel, das man auf dem Touchscreen eines Computers
                spielen kann. Das Spiel ist für zwei bis vier Spieler ausgelegt
                und kann nur lokal gespielt werden.
            </p>
            <p>
                Mit dem Covid Game habe ich einen Jurypreis beim
                Lehrlingswettbewerb Züri-Oberland 2021 gewonnen. Ich habe schon
                2020 teilgenommen, allerdings ohne grossen Erfolg.
            </p>
        </>
    );
}
