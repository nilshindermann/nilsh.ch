import { Metadata } from 'next';
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
                <a
                    href="https://drag-droppy.nilsh.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Drag Droppy
                </a>
            </p>
        </>
    );
}
