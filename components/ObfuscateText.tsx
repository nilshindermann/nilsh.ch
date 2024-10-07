'use client';

import { Obfuscate, ObfuscateProps } from '@south-paw/react-obfuscate-ts';
import React, { ReactElement } from 'react';

export default function ObfuscateText({
    children,
    ...props
}: ObfuscateProps): ReactElement {
    return (
        <Obfuscate as={'span'} {...props}>
            {children}
        </Obfuscate>
    );
}
