import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: '404 - Nils Hindermann',
    description: 'The requested page could not be found.',
};

export default function NotFoundPage(): ReactElement {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                <h1 className="mb-10 text-6xl font-bold">404</h1>
                <p className="text-xl">
                    The requested page or resource could not be found.
                </p>
                <p className="mt-10 text-xl">
                    <Link href="/">Go back to the home page.</Link>
                </p>
            </div>
        </div>
    );
}
