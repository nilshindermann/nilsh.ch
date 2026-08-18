import React from 'react';
import GameTabs from '@/components/game-tabs';

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
            {children}
        </GameTabs>
    );
}
