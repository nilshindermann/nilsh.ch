import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

const linkStyles: string = 'text-primary underline hover:no-underline';

export const metadata: Metadata = {
    title: 'Projekte - Nils Hindermann',
    description: 'Alle Projekte, an denen ich so mitgewirkt habe.',
};

export default function ProjectsPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Projekte</h1>
            <div className="max-w-3xl text-left">
                <p>
                    Hier findest du eine Übersicht aller Projekte, an denen ich
                    so mitgewirkt habe.
                </p>
                <p className="mt-2">
                    Die meisten meiner Projekte sind privat und nicht
                    öffentlich, jedoch gibt es einige Projekte, die ich auf
                    GitHub veröffentlicht habe.
                </p>
                <h2 className="mt-5 text-xl font-bold text-secondary">
                    Aktuelle Projekte
                </h2>
                <ul className="list-inside list-disc">
                    <li>
                        Aktuell bin ich mit meinem Lehrabschluss beschäftigt
                    </li>
                    <li>
                        Diese Webseite (
                        <Link
                            href="https://github.com/nilshindermann/nilsh.ch"
                            target="_blank"
                            className={linkStyles}
                        >
                            Sourcecode auf GitHub
                        </Link>
                        )
                    </li>
                </ul>
                <h2 className="mt-5 text-xl font-bold text-secondary">
                    Vergangene Projekte
                </h2>
                <ul className="list-inside list-disc">
                    <li>
                        <Link
                            href="https://github.com/nilshindermann?tab=repositories"
                            target="_blank"
                            className={linkStyles}
                        >
                            GitHub
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
