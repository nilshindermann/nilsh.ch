import { Metadata } from 'next';
import React, { ReactElement } from 'react';
import Link from '@/components/link';
import { Project, projects } from '@/data/projects';

export const metadata: Metadata = {
    title: 'Projekte - Nils Hindermann',
    description:
        'Eine Liste von einigen Projekten, die ich aktuell oder in der Vergangenheit umgesetzt habe.',
};

export default function ProjectsPage(): ReactElement {
    const activeProjects: Project[] = projects.filter((p) => p.isActive);
    const inactiveProjects: Project[] = projects.filter((p) => !p.isActive);

    const renderProjects = (projects: Project[]): ReactElement => {
        return (
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="text-right">Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p) => (
                            <tr key={p.name}>
                                <td>{p.name}</td>
                                <td className="text-right">
                                    {p.links &&
                                        p.links.map((l) => (
                                            <Link
                                                href={l.href}
                                                key={l.href}
                                                className="pl-2"
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <>
            <h1>Projekte</h1>
            <p>
                Hier findest du eine Übersicht aller Projekte, an denen ich so
                mitgewirkt habe.
            </p>
            <p className="mt-2">
                Die meisten meiner Projekte sind privat und nicht öffentlich,
                jedoch gibt es einige Projekte, die ich auf{' '}
                <Link href="https://github.com/nilshindermann?tab=repositories">
                    GitHub
                </Link>{' '}
                veröffentlicht habe.
            </p>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="grow lg:mr-2">
                    <h2>Aktuelle Projekte</h2>
                    {renderProjects(activeProjects)}
                </div>
                <div className="grow lg:ml-2">
                    <h2>Vergangene Projekte</h2>
                    {renderProjects(inactiveProjects)}
                </div>
            </div>
        </>
    );
}
