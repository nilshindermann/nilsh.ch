import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import CreditsList, { Credit } from '@/components/credits-list';

export const metadata: Metadata = {
    title: 'Credits - Drag Droppy',
    description:
        'Bei Drag Droppy geht es darum, ein Bild richtig zusammenzusetzen mittels Drag and Drop.',
};

const credits: Array<Credit> = [
    { name: 'Nils Hindermann', role: 'Entwicklung' },
    {
        name: 'azo ausbildungszentrum zürcher oberland',
        role: 'Hardware, Ausbildung, Support',
    },
];

export default function DragDroppyCreditsPage(): ReactElement {
    return <CreditsList credits={credits} />;
}
