'use client';

import { HamburgerMenu } from '@/components/HamburgerMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement, useState } from 'react';

interface LinkElement {
    href: string;
    title: string;
}

const links: LinkElement[] = [
    {
        title: 'Startseite',
        href: '/',
    },
    {
        title: 'Über mich',
        href: '/about',
    },
];

export default function Navbar(): ReactElement {
    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);

    const toggle = (): void => setShowModal(!showModal);

    return (
        <nav className="z-10 bg-navbar drop-shadow-2xl">
            <div className="container mx-auto flex flex-row justify-between p-4 tracking-widest text-white md:max-w-7xl">
                <ul className="hidden gap-2 md:flex">
                    {links.map((link) => (
                        <li
                            key={`${link.href}_${link.title}`}
                            className="flex gap-2 text-xl"
                        >
                            <Link
                                className={`hover:text-primary transition ease-in-out hover:transition-colors ${
                                    pathname === link.href ? 'font-bold' : ''
                                }`}
                                key={link.title}
                                href={link.href}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/">nilsh.ch</Link>

                <div className="block md:hidden">
                    <HamburgerMenu showModal={showModal} toggle={toggle} />
                    <div
                        className={`absolute left-0 top-0 h-screen w-screen bg-black transition-opacity delay-100 ${
                            showModal ? 'opacity-30' : 'opacity-0'
                        }`}
                    />
                    <div
                        id="mobile-nav"
                        className={`fixed right-0 top-0 h-screen min-w-[10rem] bg-navbar pt-[4rem] transition-transform delay-100 ease-in-out ${
                            showModal
                                ? 'translate-x-0 shadow-2xl'
                                : 'translate-x-full'
                        }`}
                    >
                        <ul className="flex flex-col gap-2">
                            {links.map((link) => (
                                <li
                                    key={`${link.href}_${link.title}`}
                                    className="flex flex-col gap-2"
                                >
                                    <Link
                                        className={`hover:text-primary mx-2 transition ease-in-out hover:transition-colors ${
                                            pathname === link.href
                                                ? 'font-bold'
                                                : ''
                                        }`}
                                        key={link.title}
                                        href={link.href}
                                        onClick={toggle}
                                    >
                                        {link.title}
                                    </Link>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
