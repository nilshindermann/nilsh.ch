import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Link from '@/components/link';

export const metadata: Metadata = {
    title: 'Drag Droppy',
    description:
        'Bei Drag Droppy geht es darum, ein Bild richtig zusammenzusetzen mittels Drag and Drop.',
};

export default function DragDroppyPage(): ReactElement {
    return (
        <>
            <h2>Über das Spiel</h2>
            <p className="mb-2">
                Drag Droppy ist ein Browser-Spiel, das mit JavaScript
                programmiert wurde. Die Idee kam Nils im zweiten Lehrjahr, als
                er noch im Ausbildungszentrum war.
            </p>
            <p className="mb-2">
                Wenn du Drag Droppy spielen willst, besuche die Seite{' '}
                <Link href="https://dragdroppy.nilsh.ch/">Drag Droppy</Link>
            </p>
            <iframe
                title="Spiele Drag Droppy"
                src="https://dragdroppy.nilsh.ch"
                className="border-secondary aspect-square w-full rounded-2xl border-2 lg:aspect-video"
            />
        </>
    );
}
