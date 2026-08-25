import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import GameCarousel, {
    GameCarouselSlide,
} from '@/components/game-carousel';

export const metadata: Metadata = {
    title: 'Catch Me If You Can',
    description: `Catch Me If You Can ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich am Lehrlingswettbewerb Züri-Oberland 2020 teilgenommen.`,
};

const gallery: GameCarouselSlide[] = [
    {
        href: '/assets/games/catch_me_if_you_can_slide0.webp',
        alt: 'Catch Me If You Can: Start Screen',
    },
    {
        href: '/assets/games/catch_me_if_you_can_slide1.webp',
        alt: 'Catch Me If You Can: Ingame Screen',
    },
    {
        href: '/assets/games/catch_me_if_you_can_slide2.webp',
        alt: 'Catch Me If You Can: Gameover Screen',
    },
];

export default function CatchMeIfYouCanPage(): ReactElement {
    return (
        <>
            <h2>Über das Spiel</h2>
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
            <div className="divider" />

            <GameCarousel slides={gallery} />
        </>
    );
}
