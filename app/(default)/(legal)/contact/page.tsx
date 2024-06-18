import ContactEmail from '@/components/ContactEmail';
import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Kontakt - Nils Hindermann',
    description:
        'Kontaktiere Nils Hindermann, indem du ihm eine E-Mail schreibst. Er ist ausserdem auf Social Media Plattformen wie Instagram und LinkedIn erreichbar.',
};

export default function ContactPage(): ReactElement {
    return (
        <>
            <h1>Kontakt</h1>
            <div className="text-center">
                <p>Kontaktiere mich über E-Mail.</p>
                <p className="mt-2 text-xl">
                    <ContactEmail email="hello@nilsh.ch" />
                </p>
            </div>
        </>
    );
}
