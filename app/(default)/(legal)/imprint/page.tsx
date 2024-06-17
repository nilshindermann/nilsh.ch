import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Impressum - Nils Hindermann',
    description: 'Legal content.',
};

export default function ImprintPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Impressum</h1>
            <p>
                Nils Hindermann
            </p>
        </>
    );
}
