import React from 'react';
import Breadcrumbs from '@/components/breadcrumbs';

export default function GamesLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <>
            <Breadcrumbs />
            {children}
        </>
    );
}
