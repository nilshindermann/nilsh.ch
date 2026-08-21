import React, { ReactElement } from 'react';

export interface Credit {
    name: string;
    role: string;
}

export default function CreditsList({
    credits,
    intro = 'Diese Parteien haben zu diesem Spiel beigetragen:',
}: {
    credits: Array<Credit>;
    intro?: string;
}): ReactElement {
    return (
        <>
            <h2>Credits</h2>
            <p className="mb-2">{intro}</p>
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
