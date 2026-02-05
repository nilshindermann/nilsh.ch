import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Projekte - Nils Hindermann',
    description:
        'Eine Liste von einigen Projekten, die ich aktuell oder in der Vergangenheit umgesetzt habe.',
};

export default function ProjectsPage(): ReactElement {
    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">Projekte</h1>
            <div className="max-w-3xl text-left">
                <p>
                    Hier findest du eine Übersicht aller Projekte, an denen ich
                    so mitgewirkt habe.
                </p>
                <p className="mt-2">
                    Die meisten meiner Projekte sind privat und nicht
                    öffentlich, jedoch gibt es einige Projekte, die ich auf{' '}
                    <Link
                        href="https://github.com/nilshindermann?tab=repositories"
                        target="_blank"
                    >
                        GitHub
                    </Link>{' '}
                    veröffentlicht habe.
                </p>
                <h2 className="text-secondary mt-5 text-xl font-bold">
                    Aktuelle Projekte
                </h2>
                <ul className="list-outside list-disc pl-5">
                    <li>
                        Diese Webseite (
                        <Link
                            href="https://github.com/nilshindermann/nilsh.ch"
                            target="_blank"
                        >
                            Sourcecode
                        </Link>
                        )
                    </li>
                    <li>
                        <Link
                            href="https://dragdroppy.nilsh.ch"
                            target="_blank"
                        >
                            Drag Droppy
                        </Link>
                    </li>
                </ul>
                <h2 className="text-secondary mt-5 text-xl font-bold">
                    Vergangene Projekte
                </h2>
                <ul className="list-outside list-disc pl-5">
                    <li>
                        Diverse Projekte für Fachmodule an der TBZ
                        <ul className="list-outside list-disc pl-5">
                            <li>
                                <Link
                                    href="https://m152.nilsh.ch"
                                    target="_blank"
                                >
                                    M152
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/code-with-nils/Parkgarage-Romer-Hindermann"
                                    target="_blank"
                                >
                                    M242
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>Azubi Management Tool</li>
                    <li>
                        LWZO 2021 (
                        <Link href="https://l.nilsh.ch/lwzowin" target="_blank">
                            gewonnen
                        </Link>
                        )
                    </li>
                    <li>LWZO 2020</li>
                </ul>
            </div>
        </>
    );
}
