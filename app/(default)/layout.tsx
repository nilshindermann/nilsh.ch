import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar>
                <main className="mx-auto w-full p-8 lg:container">
                    {children}
                </main>
            </Navbar>
            <Footer />
        </div>
    );
}
