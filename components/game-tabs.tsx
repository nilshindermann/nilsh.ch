'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/link';

export interface GameTab {
    href: string;
    label: string;
}

export default function GameTabs({
    title,
    tabs,
    children,
}: {
    title: string;
    tabs: Array<GameTab>;
    children: React.ReactNode;
}): React.ReactNode {
    const pathname = usePathname();

    return (
        <>
            <h1>{title}</h1>
            <div role="tablist" className="tabs tabs-box justify-center">
                {tabs.map(({ href, label }) => (
                    <Link
                        key={href}
                        role="tab"
                        className={`tab ${pathname === href ? 'tab-active' : ''}`}
                        href={href}
                    >
                        {label}
                    </Link>
                ))}
            </div>
            <div className="mt-5">{children}</div>
        </>
    );
}
