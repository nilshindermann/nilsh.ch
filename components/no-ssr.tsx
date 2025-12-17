import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';

interface NoSSRProps {
    children: React.ReactNode;
    className?: string; // Optional prop for additional styles
}

const NoSSR: ComponentType<NoSSRProps> = dynamic(
    () =>
        Promise.resolve(({ children, className }: NoSSRProps) => (
            <span className={className}>{children}</span>
        )),
    {
        ssr: false,
    },
);

export default NoSSR;
