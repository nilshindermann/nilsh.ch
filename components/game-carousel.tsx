import React, { ReactElement } from 'react';
import Image from 'next/image';

export interface GameCarouselSlide {
    href: string;
    alt: string;
}

interface GameCarouselProps {
    slides: GameCarouselSlide[];
}

export default function GameCarousel({
    slides,
}: GameCarouselProps): ReactElement {
    return (
        <div className="carousel w-full">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    id={`slide${index}`}
                    className="carousel-item relative w-full"
                >
                    <Image
                        width={1920}
                        height={1200}
                        alt={slide.alt}
                        src={slide.href}
                        className="w-full"
                    />
                    <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
                        <a
                            href={`#slide${index === 0 ? slides.length - 1 : index - 1}`}
                            className="btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href={`#slide${index === slides.length - 1 ? 0 : index + 1}`}
                            className="btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
