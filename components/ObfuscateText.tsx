'use client';

import { Obfuscate } from '@south-paw/react-obfuscate-ts';
import React, { ReactElement } from 'react';

interface ObfuscateTextProps {
    children: string;
}

export default function ObfuscateText({
    children,
    ...props
}: ObfuscateTextProps): ReactElement {
    return (
        <Obfuscate as={'span'} {...props}>
            {children}
        </Obfuscate>
    );
}
