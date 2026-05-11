import InternalLink, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

export default function Link({
    href,
    className,
    ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>): React.ReactNode {
    const isInternalLink = href && href.startsWith('/');
    const isAnchorLink = href && href.startsWith('#');

    if (isInternalLink) {
        return (
            <InternalLink
                className={`wrap-break-word ${className}`}
                href={href}
                {...rest}
            />
        );
    }

    if (isAnchorLink) {
        return (
            <a
                className={`wrap-break-word ${className}`}
                href={href}
                {...rest}
            />
        );
    }

    return (
        <a
            className={`wrap-break-word ${className}`}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            {...rest}
        />
    );
}
