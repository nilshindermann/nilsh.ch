import React from 'react';
import GameTabs from '@/components/game-tabs';

export default function DragDroppyLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <GameTabs
            title="Drag Droppy"
            tabs={[
                { href: '/games/drag-droppy', label: 'Über das Spiel' },
                { href: '/games/drag-droppy/credits', label: 'Credits' },
            ]}
        >
            {children}
        </GameTabs>
    );
}
