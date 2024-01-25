import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: '404 - Nils Hindermann',
    description: 'Find out more about Nils Hindermann',
};

export default function NotFoundPage(): ReactElement {
    return (
        <>
            <h1 className="mb-10 text-6xl font-bold">404</h1>
            <p className="text-xl">This page could not be found.</p>
        </>
    );
}
