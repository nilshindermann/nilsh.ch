import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Drag Droppy - Nils Hindermann',
    description:
        'Bei Drag Droppy geht es darum, ein Bild richtig zusammenzusetzen mittels Drag and Drop.',
};

export default function DragDroppyPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">
                Drag Droppy
            </h1>
            <p>
                Wenn du Drag Droppy spielen willst, besuche die Seite{' '}
                <Link
                    href="https://dragdroppy.nilsh.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Drag Droppy
                </Link>
            </p>
        </>
    );
}
