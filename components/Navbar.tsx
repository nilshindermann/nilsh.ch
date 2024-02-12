'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';

const links: { href: string; displayName: string }[] = [
    {
        href: '/about',
        displayName: 'Über mich',
    },
    {
        href: '/contact',
        displayName: 'Kontakt',
    },
    {
        href: '/projects',
        displayName: 'Projekte',
    },
];

export default function Navbar(): ReactElement {
    const pathname = usePathname();

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">
                    Nils Hindermann
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={
                                    pathname == link.href ? 'font-bold' : ''
                                }
                            >
                                {link.displayName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
