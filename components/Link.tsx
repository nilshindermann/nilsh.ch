import Link, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

export default function CustomLink({
    href,
    ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const isInternalLink = href && href.startsWith('/');
    const isAnchorLink = href && href.startsWith('#');

    if (isInternalLink) {
        return <Link className="break-words" href={href} {...rest} />;
    }

    if (isAnchorLink) {
        return <a className="break-words" href={href} {...rest} />;
    }

    return (
        <a
            className="break-words"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            {...rest}
        />
    );
}
