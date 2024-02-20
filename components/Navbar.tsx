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
                <label className="btn btn-circle swap swap-rotate lg:hidden">
                    <input type="checkbox" />
                    <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                    <svg
                        className="swap-on fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
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
