import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Catch Me If You Can - Nils Hindermann',
    description: `Catch Me If You Can ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich am Lehrlingswettbewerb Züri-Oberland 2020 teilgenommen.`,
};

export default function CatchMeIfYouCanPage(): ReactElement {
    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">
                Catch Me If You Can
            </h1>
            <p>
                <b>Catch Me If You Can</b> ist ein Spiel, das ich während der
                Corona-Pandemie entwickelt habe. Es handelt sich um ein
                einfaches Spiel, das man auf einem Windows-Computer spielen
                kann.
            </p>
            <p>
                Mit diesem Spiel habe ich zusammen mit vier Kollegen am
                Lehrlingswettbewerb Züri-Oberland 2020 teilgenommen.
            </p>
        </>
    );
}
