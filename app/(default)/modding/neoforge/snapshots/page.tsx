import dayjs from 'dayjs';
import { XMLParser } from 'fast-xml-parser';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface DataResult {
    metadata: {
        groupId: string;
        artifactId: string;
        versioning: {
            latest: string;
            release: string;
            lastUpdated: number;
            versions: {
                version: string[];
            };
        };
    };
}

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'NeoForge for Snapshots',
    description:
        'Inoffical download page for NeoForge for Minecraft Snapshots.',
};

async function getData(): Promise<DataResult> {
    const res = await fetch(
        'https://nexus.themcbrothers.net/repository/neoforged-snapshots/net/neoforged/neoforge/maven-metadata.xml',
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data for "NeoForge for Snapshots".');
    }

    const parser = new XMLParser();
    const xmlData = await res.text();
    return parser.parse(xmlData);
}

export default async function Page(): Promise<ReactElement> {
    const data = await getData();

    const lastUpdated: Date = dayjs(
        data.metadata.versioning.lastUpdated.toString(),
        'YYYYMMDDHHmmss',
    ).toDate();

    return (
        <div>
            <h1 className="mb-5 text-4xl font-bold text-primary">
                NeoForge for Snapshots
            </h1>

            <p className="mb-4">
                This is the unofficial download page for NeoForge for Minecraft
                Snapshots.
            </p>

            <div role="alert" className="alert alert-warning">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
                <span className="font-bold">
                    <Link
                        className="text-inherit no-underline hover:underline"
                        href="https://neoforged.net/news/neoforge-snapshots/#:~:text=NeoForge%20for%20snapshot%20versions%20is%20not%20intended%20for%20playing."
                        target="_blank"
                    >
                        &quot;NeoForge for snapshot versions is not intended for
                        playing!&quot;
                    </Link>
                </span>
            </div>

            <p className="mt-4">
                If you still want to download it, you can do so below.
            </p>

            <table className="mt-4 min-w-full divide-y divide-gray-600 text-left text-gray-200">
                <thead className="bg-gray-800">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                        >
                            Version
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                        >
                            Download
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 bg-gray-900">
                    {data.metadata.versioning.versions.version.map(
                        (version: string, index: number) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    {version}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    <a
                                        href={`https://nexus.themcbrothers.net/repository/neoforged-snapshots/net/neoforged/neoforge/${version}/neoforge-${version}-installer.jar`}
                                        download={`neoforge-${version}-installer.jar`}
                                    >
                                        Installer
                                    </a>
                                </td>
                            </tr>
                        ),
                    )}
                </tbody>
            </table>

            <p>
                Latest Version: <b>{data.metadata.versioning.latest}</b>
            </p>
            <p>
                Last Updated: <b>{lastUpdated.toLocaleString()}</b>
            </p>
        </div>
    );
}
