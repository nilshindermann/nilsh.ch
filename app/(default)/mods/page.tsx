import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import { SearchResponse, SearchResult } from './models';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Mods - Nils Hindermann',
    description: 'Just some information about mods created by someone else.',
};

async function getData(): Promise<SearchResponse> {
    // This is a workaround for the SSL certificate issue with the API.
    // Set this environment variable to ignore the SSL certificate issue.
    // .evn.local: NODE_TLS_REJECT_UNAUTHORIZED=0
    const res = await fetch(
        'https://api.modrinth.com/v2/search?facets=[[%22author:TheMCBrothers%22],[%22project_type:mod%22]]',
        {
            headers: {
                'User-Agent': 'nilshindermann/nilsh.ch/dev (hello@nilsh.ch)',
            },
        },
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data for Mods');
    }

    return res.json();
}

export default async function Page({
    searchParams,
}: {
    searchParams?: { [key: string]: string | undefined };
}): Promise<ReactElement> {
    const data: SearchResponse = await getData();

    const filterMods = (mod: SearchResult): boolean => {
        const search = searchParams?.search?.toLowerCase();

        if (!search) {
            return true;
        }

        return (
            mod.title.toLowerCase().includes(search) ||
            mod.description.toLowerCase().includes(search) ||
            mod.slug.toLowerCase().includes(search)
        );
    };

    const sortMods = (modA: SearchResult, modB: SearchResult): number => {
        return new Date(modA.date_modified) > new Date(modB.date_modified)
            ? -1
            : 1;
    };

    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Mods</h1>
            <p>This is the mods page for {data.total_hits} mods</p>

            <section className="my-3 w-96">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
            </section>

            {data.hits
                .filter(filterMods)
                .sort(sortMods)
                .map((mod: SearchResult) => (
                    <article
                        key={mod.project_id}
                        className="card mb-5 w-full bg-base-300 shadow-xl"
                    >
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-primary">
                                <Link
                                    href={`https://modrinth.com/project/${mod.slug}`}
                                    target="_blank"
                                >
                                    {mod.title}
                                </Link>
                            </h2>
                            <p>{mod.description}</p>
                            <p>Author: {mod.author}</p>
                            <p>Downloads: {mod.downloads}</p>
                            <p>Follows: {mod.follows}</p>
                            <p>
                                Created:{' '}
                                {new Date(
                                    mod.date_created,
                                ).toLocaleDateString()}
                            </p>
                            <p>
                                Updated:{' '}
                                {new Date(
                                    mod.date_modified,
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </article>
                ))}
        </>
    );
}
