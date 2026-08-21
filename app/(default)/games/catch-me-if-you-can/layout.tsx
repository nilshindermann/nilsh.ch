import React from 'react';
import GameTabs from '@/components/game-tabs';
import Image from 'next/image';

const gameName = 'Catch Me If You Can';

export default function CatchMeIfYouCanPageLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <GameTabs
            title={gameName}
            tabs={[
                { href: '/games/catch-me-if-you-can', label: 'Über das Spiel' },
                {
                    href: '/games/catch-me-if-you-can/downloads',
                    label: 'Downloads',
                },
                {
                    href: '/games/catch-me-if-you-can/credits',
                    label: 'Credits',
                },
            ]}
        >
            <Image
                src="/assets/games/catch_me_if_you_can_banner.webp"
                alt="Catch Me If You Can"
                width={1600}
                height={300}
            />
            {children}
        </GameTabs>
    );
}
