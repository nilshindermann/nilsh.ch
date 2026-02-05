import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface Game {
    slug: string;
    name: string;
    info: string;
}

const games: Array<Game> = [
    {
        slug: 'apple-vs-apples',
        name: 'Apple vs. Apples',
        info: '2014',
    },
    {
        slug: 'catch-me-if-you-can',
        name: 'Catch Me If You Can',
        info: '2020',
    },
    {
        slug: 'covid-game',
        name: 'Covid Game',
        info: '2021',
    },
    {
        slug: 'drag-droppy',
        name: 'Drag Droppy',
        info: '2021',
    },
];

export const metadata: Metadata = {
    title: 'Games - Nils Hindermann',
    description:
        'Einige Spiele, die ich entwickelt habe. Unter anderem das Covid Game und Drag Droppy.',
};

export default function GamesPage(): ReactElement {
    return (
        <div className="text-left">
            <h1 className="text-primary mb-5 text-4xl font-bold">Games</h1>
            <p>
                Hier findest du einige Spiele, die ich entwickelt habe. Unter
                anderem das Covid Game und Drag Droppy.
            </p>

            <ul className="list">
                {games.map((game: Game) => (
                    <li className="list-row" key={game.slug}>
                        <div className="w-13 text-xl">{game.info}</div>
                        <Link
                            className="text-neutral-content list-col-grow text-left text-xl"
                            href={`/games/${game.slug}`}
                        >
                            {game.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
