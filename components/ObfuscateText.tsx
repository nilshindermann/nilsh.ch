'use client';

import React, { ReactElement, useEffect, useState } from 'react';
import NoSSR from '@/components/no-ssr';

interface ObfuscateTextProps {
    children: string;
}

export default function ObfuscateText({
    children,
    ...props
}: ObfuscateTextProps): ReactElement {
    const [text, setText] = useState('');

    useEffect(() => {
        const realText = children;
        const timeoutId = setTimeout(() => setText(realText), 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    return <NoSSR {...props}>{text}</NoSSR>;
}
