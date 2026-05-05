import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <Navbar>
            <main className="mx-auto w-full grow p-8 lg:container">
                {children}
            </main>
            <Footer />
        </Navbar>
    );
}
