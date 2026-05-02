'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import Link from '@/components/link';

import logo from '@/app/assets/nilshindermann_logo.svg';

interface NavbarProps {
    children: ReactElement;
}

interface NavLink {
    displayName: string;
    href?: string;
    children?: NavLink[];
}

const links: NavLink[] = [
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

export default function Navbar(props: NavbarProps): ReactElement {
    const pathname = usePathname();

    const renderNavLink = (link: NavLink): ReactElement => {
        return (
            <li key={link.href}>
                {(link.children && (
                    <details>
                        <summary>{link.displayName}</summary>
                        <ul className="z-50 rounded-t-none p-2">
                            {link.href && (
                                <li>
                                    <Link
                                        href={link.href}
                                        className={`text-neutral-content no-underline ${pathname == link.href ? 'menu-active' : ''}`}
                                    >
                                        Übersicht
                                    </Link>
                                </li>
                            )}
                            {link.children.map((subLink) =>
                                renderNavLink(subLink),
                            )}
                        </ul>
                    </details>
                )) || (
                    <Link
                        href={link.href ?? '/'}
                        className={`text-neutral-content no-underline ${pathname == link.href ? 'menu-active' : ''}`}
                    >
                        {link.displayName}
                    </Link>
                )}
            </li>
        );
    };

    return (
        <div className="drawer flex flex-1 flex-col">
            <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <nav className="navbar bg-base-300 shadow-sm">
                    <div className="mx-auto flex w-full items-center lg:container">
                        <div className="flex-none lg:hidden">
                            <label
                                htmlFor="nav-drawer"
                                aria-label="open sidebar"
                                className="btn btn-square btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2">
                            <Link className="btn btn-ghost text-xl" href="/">
                                <Image
                                    src={logo}
                                    alt="Nils Hindermann"
                                    className="h-8 w-auto"
                                />
                            </Link>
                        </div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                {links.map((link) => renderNavLink(link))}
                            </ul>
                        </div>
                    </div>
                </nav>
                {props.children}
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="nav-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {links.map((link) => renderNavLink(link))}
                </ul>
            </div>
        </div>
    );
}
