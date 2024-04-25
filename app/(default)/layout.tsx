import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { ReactElement } from 'react';

export default function DefaultLayout({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                {children}
            </main>
            <Footer />
        </div>
    );
}
