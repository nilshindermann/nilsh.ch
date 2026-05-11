import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Link from '@/components/link';

export const metadata: Metadata = {
    title: 'Drag Droppy - Nils Hindermann',
    description:
        'Bei Drag Droppy geht es darum, ein Bild richtig zusammenzusetzen mittels Drag and Drop.',
};

export default function DragDroppyPage(): ReactElement {
    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">
                Drag Droppy
            </h1>
            <p>
                Wenn du Drag Droppy spielen willst, besuche die Seite{' '}
                <Link href="https://dragdroppy.nilsh.ch/">Drag Droppy</Link>
            </p>
        </>
    );
}
