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
        <nav className="hidden h-20 items-center justify-center bg-sky-950 text-center">
            <ul className="p-0 text-xl">
                {links.map((link) => (
                    <li
                        key={link.url}
                        className="mb-3 last:mb-0 lg:m-3 lg:inline"
                    >
                        <Link
                            href={link.url}
                            className={`text-white transition-colors hover:text-sky-400 ${
                                pathname === link.url ? 'font-bold' : ''
                            }`}
                        >
                            {link.displayName}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
