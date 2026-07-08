'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/link';

export default function AppleVsApplesLayout({
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
            <h1>Apple vs. Apples</h1>
            <div role="tablist" className="tabs tabs-box justify-center">
                {tab('/games/apple-vs-apples', 'Description')}
                {tab('/games/apple-vs-apples/downloads', 'Downloads')}
                {tab('/games/apple-vs-apples/archive', 'Archiv')}
                {tab('/games/apple-vs-apples/credits', 'Credits')}
            </div>
            <div className="mt-5">{children}</div>
        </>
    );
}
