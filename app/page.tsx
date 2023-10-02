import Link from 'next/link';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
    const socialMediaLinks: { url: string; displayName: string }[] = [
        {
            url: 'https://www.youtbube.com/@nilshindermann',
            displayName: 'YouTube',
        },
        {
            url: 'https://www.instagram.com/nilshindermann',
            displayName: 'Instagram',
        },
        {
            url: 'https://twitter.com/nilshindermann',
            displayName: 'Twitter',
        },
        {
            url: 'https://twitch.com/nilshindermann',
            displayName: 'Twitch',
        },
        {
            url: 'https://linktr.ee/nilshindermann',
            displayName: 'Linktree',
        },
    ];

    return (
        <>
            <h1 className="font-sans text-4xl font-bold text-sky-400 md:text-6xl">
                Nils Hindermann
            </h1>
            <p className="mt-8 text-xl ">
                Hi, ich bin Nils Hindermann 😊
                <br />
                Meine Hobbys sind Orientierungslauf & Geocaching.
            </p>

            <p className="mt-8 text-xl">
                In meiner Freizeit fotografiere ich gerne. Einige Fotos poste
                ich auf{' '}
                <Link
                    href="https://l.nilsh.ch/ig"
                    target="_blank"
                    className="text-sky-400 underline transition-colors hover:text-sky-200"
                >
                    Instagram
                </Link>
                .
            </p>
            <ul className="mt-8 p-0 text-xl">
                {socialMediaLinks.map((link) => (
                    <li
                        key={link.url}
                        className="mb-3 last:mb-0 lg:m-3 lg:inline"
                    >
                        <Link
                            href={link.url}
                            target="_blank"
                            className="text-sky-400 underline transition-colors hover:text-sky-200"
                        >
                            {link.displayName}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
