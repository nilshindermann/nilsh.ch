import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import GameCarousel, { GameCarouselSlide } from '@/components/game-carousel';

export const metadata: Metadata = {
    title: 'Covid Game',
    description: `Covid Game ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich einen Jurypreis beim Lehrlingswettbewerb Züri-Oberland 2021 gewonnen.`,
};

const gallery: GameCarouselSlide[] = [
    {
        href: '/assets/games/covid_game_slide1.webp',
        alt: 'Covid Game: Logo & Icons',
    },
    {
        href: '/assets/games/covid_game_slide2.webp',
        alt: 'Covid Game: Start Screen',
    },
    {
        href: '/assets/games/covid_game_slide3.webp',
        alt: 'Covid Game: Ingame Screen without progress',
    },
    {
        href: '/assets/games/covid_game_slide4.webp',
        alt: 'Covid Game: Ingame Screen with rolled dice',
    },
    {
        href: '/assets/games/covid_game_slide5.webp',
        alt: 'Covid Game: Ingame Screen with text displayed',
    },
    {
        href: '/assets/games/covid_game_slide6.webp',
        alt: 'Covid Game: Ingame Screen with progress',
    },
];

export default function CovidGamePage(): ReactElement {
    return (
        <>
            <h2>Über das Spiel</h2>
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

            <div className="divider" />

            <GameCarousel slides={gallery} />
        </>
    );
}
