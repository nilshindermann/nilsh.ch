import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Downloads - Covid Game',
    description: `Covid Game ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich einen Jurypreis beim Lehrlingswettbewerb Züri-Oberland 2021 gewonnen.`,
};

export default function CatchMeIfYouCanDownloadsPage(): ReactElement {
    return (
        <>
            <h2>Downloads</h2>
            <p>Download noch nicht verfügbar.</p>
        </>
    );
}
