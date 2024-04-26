import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'nilsh.ch - Nils Hindermann',
    description:
        'Nils Hindermann ist ein Schweizer Softwareentwickler aus Zürich.',
};

export default function RootLayout({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    return (
        <html lang="de-ch">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
