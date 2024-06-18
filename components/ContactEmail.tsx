'use client';

import { Obfuscate } from '@south-paw/react-obfuscate-ts';
import { ReactElement } from 'react';

interface ContactEmailProps {
    email: string;
}

export default function ContactEmail({
    email,
}: ContactEmailProps): ReactElement {
    return (
        <Obfuscate
            email={`${email}?subject=Hello%20Nils!`}
            obfuscateText="https://www.nilsh.ch/privacy"
            aria-label="Email address is obfuscated, focus to reveal"
            className="text-inherit"
        >
            {email}
        </Obfuscate>
    );
}
