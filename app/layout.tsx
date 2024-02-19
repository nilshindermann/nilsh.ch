import './globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
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
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
