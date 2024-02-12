'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';

const links: { url: string; displayName: string }[] = [
    {
        url: '/',
        displayName: 'Home',
    },
    {
        url: '/about',
        displayName: 'About',
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
                    <li>
                        <NavbarLink href="/about">Über mich</NavbarLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function NavbarLink({ href, children }): ReactElement {
    const pathname = usePathname();
    return (
        <Link href={href} className={pathname == href ? 'font-bold' : ''}>
            {children}
        </Link>
    );
}
