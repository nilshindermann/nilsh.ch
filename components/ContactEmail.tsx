'use client';

import { ReactElement, useEffect, useState } from 'react';
import NoSSR from '@/components/no-ssr';

interface ContactEmailProps {
    email: string;
}

export default function ContactEmail({
    email,
}: ContactEmailProps): ReactElement {
    const [displayEmail, setDisplayEmail] = useState('');

    useEffect(() => {
        const realEmail = email;
        const timeoutId = setTimeout(() => setDisplayEmail(realEmail), 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    return <NoSSR className="text-inherit">{displayEmail}</NoSSR>;
}
