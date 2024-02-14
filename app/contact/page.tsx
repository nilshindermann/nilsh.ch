import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Kontakt - Nils Hindermann',
    description: 'Kontaktiere Nils Hindermann über ein Formular.',
};

export default function ContactPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Kontakt</h1>
            <p>Kontaktiere mich über E-Mail.</p>
            <p className="mt-2 text-2xl">hello[at]nilsh.ch</p>
            <div
                role="alert"
                className="alert alert-info mt-2 max-w-fit px-4 py-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span>[at] durch ein @ ersetzen!</span>
            </div>
        </>
    );
}
