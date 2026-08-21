import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Catch Me If You Can',
    description: `Catch Me If You Can ist ein Spiel, das ich während der Corona-Pandemie entwickelt habe.
    Damit habe ich am Lehrlingswettbewerb Züri-Oberland 2020 teilgenommen.`,
};

const gallery = [
    {
        href: '/assets/games/catch_me_if_you_can_0.webp',
        alt: 'Catch Me If You Can: Start Screen',
    },
    {
        href: '/assets/games/catch_me_if_you_can_1.webp',
        alt: 'Catch Me If You Can: Ingame Screen',
    },
    {
        href: '/assets/games/catch_me_if_you_can_2.webp',
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

            <div className="carousel w-full">
                {gallery.map((item, index) => (
                    <div
                        key={index}
                        id={`slide${index}`}
                        className="carousel-item relative w-full"
                    >
                        <Image
                            width={1920}
                            height={1200}
                            alt={item.alt}
                            src={item.href}
                            className="w-full"
                        />
                        <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
                            <a
                                href={`#slide${index === 0 ? gallery.length - 1 : index - 1}`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${index === gallery.length - 1 ? 0 : index + 1}`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
