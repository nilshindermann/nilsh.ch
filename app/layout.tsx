import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'nilsh.ch - Nils Hindermann',
    description:
        'Nils Hindermann ist ein Schweizer Softwareentwickler aus Zürich.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <html lang="de-ch">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
