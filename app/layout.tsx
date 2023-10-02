import './globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'nilsh.ch - Nils Hindermann',
    description: 'This is the website of Nils Hindermann',
};

export default function RootLayout({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex flex-1 flex-col items-center justify-center p-16 text-center">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
