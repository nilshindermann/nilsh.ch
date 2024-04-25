import type { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Special Page',
    description:
        'This is a special page which should not be indexed by search engines',
    robots: {
        index: false,
    },
};

export default function SpecialLayout({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    return <>{children}</>;
}
