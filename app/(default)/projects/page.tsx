import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Projekte - Nils Hindermann',
    description: 'Alle Projekte, an denen ich so mitgewirkt habe.',
};

export default function ProjectsPage(): ReactElement {
    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">Projekte</h1>
            <p>
                Hier werden in Zukunft die Projekte von Nils Hindermann
                aufgeführt.
            </p>
        </>
    );
}
