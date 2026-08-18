import React from 'react';
import GameTabs from '@/components/game-tabs';

const gameName = 'Apple vs. Apples';

export default function AppleVsApplesLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <GameTabs
            title={gameName}
            tabs={[
                { href: '/games/apple-vs-apples', label: 'Beschreibung' },
                {
                    href: '/games/apple-vs-apples/downloads',
                    label: 'Downloads',
                },
                { href: '/games/apple-vs-apples/archive', label: 'Archiv' },
                { href: '/games/apple-vs-apples/credits', label: 'Credits' },
            ]}
        >
            {children}
        </GameTabs>
    );
}
