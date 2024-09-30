import Link from '@/components/Link';
import { Metadata } from 'next';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Geocaching - Nils Hindermann',
    description:
        'Geocaching ist eines meiner Hobbys. Seit 2018 habe ich einen eigenen Account und habe über 7000 Funde.',
};

export default function OrienteeringPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">Geocaching</h1>
            <p>
                Seit Mai 2018 bin ich begeisterter Geocacher. Ich bin
                hauptsächlich in der Schweiz unterwegs und habe bereits über
                7000 Funde.
                <br />
                Mein Nickname ist <b>froggy1407</b>.
            </p>
            <h2 className="mt-5 text-2xl font-bold text-secondary">
                Meine Statistiken
            </h2>
            <Link href="https://project-gc.com/ProfileStats/froggy1407">
                <Image
                    alt="Project-GC"
                    src="https://cdn2.project-gc.com/ProfileStatsImage/froggy1407"
                    width="0"
                    height="0"
                    className="h-auto w-full"
                    unoptimized
                />
            </Link>
        </>
    );
}
