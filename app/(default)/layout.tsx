import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

import s from './default.module.css';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <Navbar>
            <main className={s.default}>{children}</main>
            <Footer />
        </Navbar>
    );
}
