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
        href: '/orienteering',
        displayName: 'Orientierungslauf',
    },
    {
        href: '/geocaching',
        displayName: 'Geocaching',
    },
    {
        href: '/projects',
        displayName: 'Projekte',
    },
];

export default function Navbar(): ReactElement {
    const pathname = usePathname();

    return (
        <div className="navbar bg-neutral shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {' '}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{' '}
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`text-neutral-content no-underline ${pathname == link.href ? 'text-white underline' : ''}`}
                                >
                                    {link.displayName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" href="/">
                    Nils Hindermann
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-neutral-content no-underline ${pathname == link.href ? 'text-white underline' : ''}`}
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
