import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Projekte - Nils Hindermann',
    description: 'Alle Projekte, an denen ich so mitgewirkt habe.',
};

export default function ProjectsPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Projekte</h1>
            <p>
                Hier findest du eine Übersicht aller Projekte, an denen ich so
                mitgewirkt habe.
            </p>
            <h2>Aktuell Projekte</h2>
            <p>
                Aktuell gibt es keine Projekte, die ich hier aufführen möchte.
            </p>
            <h2>Vergangene Projekte</h2>
            <p>
                Die meisten meiner Projekte sind privat und nicht öffentlich,
                jedoch gibt es einige Projekte, die ich auf GitHub
                veröffentlicht habe.
            </p>
            <p>
                Hier eine Auswahl:
                <ul>
                    <li>
                        <a href="https://github.com/nilshindermann">
                            Projekt 1
                        </a>
                    </li>
                </ul>
            </p>
        </>
    );
}
