'use client';

import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import React, { ReactElement, useState } from 'react';

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
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div className="navbar sticky top-0 bg-neutral text-neutral-content">
            <div className="flex-1">
                <div
                    className={
                        'dropdown lg:hidden' +
                        (menuOpen ? ' dropdown-open' : '')
                    }
                >
                    <label
                        tabIndex={0}
                        className="btn btn-circle swap swap-rotate lg:hidden"
                    >
                        <input
                            type="checkbox"
                            checked={menuOpen}
                            aria-label="Toggle menu"
                            onChange={(e) => setMenuOpen(e.target.checked)}
                        />
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
                    <ul
                        tabIndex={0}
                        className={
                            'menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow lg:hidden' +
                            (!menuOpen ? ' hidden' : '')
                        }
                    >
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-inherit no-underline ${pathname == link.href ? 'font-bold' : ''}`}
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
            <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-inherit no-underline ${pathname == link.href ? 'font-bold' : ''}`}
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
