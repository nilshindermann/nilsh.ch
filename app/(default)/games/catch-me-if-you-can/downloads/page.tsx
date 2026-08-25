import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Downloads - Catch Me If You Can',
    description: `Catch Me If You Can ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich am Lehrlingswettbewerb Züri-Oberland 2020 teilgenommen.`,
};

export default function CatchMeIfYouCanDownloadsPage(): ReactElement {
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
