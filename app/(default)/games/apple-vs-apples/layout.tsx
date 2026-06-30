import React from 'react';
import Link from '@/components/link';

export default function AppleVsApplesLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <>
            <h1>Apple vs. Apples</h1>
            <div role="tablist" className="tabs tabs-box justify-center">
                <Link role="tab" className="tab" href="/games/apple-vs-apples">
                    Description
                </Link>
                <Link
                    role="tab"
                    className="tab"
                    href="/games/apple-vs-apples/downloads"
                >
                    Downloads
                </Link>
                <Link
                    role="tab"
                    className="tab"
                    href="/games/apple-vs-apples/archive"
                >
                    Archiv
                </Link>
                <Link
                    role="tab"
                    className="tab"
                    href="/games/apple-vs-apples/credits"
                >
                    Credits
                </Link>
            </div>
            <div className="mt-5">{children}</div>
        </>
    );
}
