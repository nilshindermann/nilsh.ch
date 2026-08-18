'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/link';

export default function CatchMeIfYouCanPageLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    const pathname = usePathname();

    const tab = (href: string, label: string): React.ReactElement => (
        <Link
            role="tab"
            className={`tab ${pathname === href ? 'tab-active' : ''}`}
            href={href}
        >
            {label}
        </Link>
    );

    return (
        <>
            <h1>Catch Me If You Can</h1>
            <div role="tablist" className="tabs tabs-box justify-center">
                {tab('/games/catch-me-if-you-can', 'Über das Spiel')}
                {tab('/games/catch-me-if-you-can/downloads', 'Downloads')}
                {tab('/games/catch-me-if-you-can/credits', 'Credits')}
            </div>
            <div className="mt-5">{children}</div>
        </>
    );
}
