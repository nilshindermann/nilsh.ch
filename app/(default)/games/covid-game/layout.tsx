import React from 'react';
import GameTabs from '@/components/game-tabs';

export default function CovidGameLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <GameTabs
            title="Covid Game"
            tabs={[
                { href: '/games/covid-game', label: 'Über das Spiel' },
                { href: '/games/covid-game/credits', label: 'Credits' },
            ]}
        >
            {children}
        </GameTabs>
    );
}
