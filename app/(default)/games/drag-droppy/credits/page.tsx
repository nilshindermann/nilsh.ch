import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Credits - Drag Droppy - Nils Hindermann',
    description:
        'Bei Drag Droppy geht es darum, ein Bild richtig zusammenzusetzen mittels Drag and Drop.',
};

interface Credit {
    name: string;
    role: string;
}

const credits: Array<Credit> = [
    { name: 'Nils Hindermann', role: 'Entwicklung' },
];

export default function DragDroppyCreditsPage(): ReactElement {
    return (
        <>
            <h2>Credits</h2>
            <p className="mb-2">
                Diese Parteien haben zu diesem Spiel beigetragen:
            </p>
            <ul className="list">
                {credits.map((credit) => (
                    <li key={credit.name} className="list-row">
                        <div className="list-col-grow">{credit.name}</div>
                        <div>{credit.role}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}
