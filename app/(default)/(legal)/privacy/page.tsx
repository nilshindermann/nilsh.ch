import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Datenschutz - Nils Hindermann',
    description: 'Legal content.',
};

export default function PrivacyPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Datenschutz</h1>
            <p>
                Keine Cookies zu Marketing oder Tracking
            </p>
        </>
    );
}
