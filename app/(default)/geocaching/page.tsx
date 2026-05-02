import { Metadata } from 'next';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import Link from '@/components/link';

export const metadata: Metadata = {
    title: 'Geocaching - Nils Hindermann',
    description:
        'Geocaching ist eines meiner Hobbys. Seit 2018 habe ich einen eigenen Account und habe über 7000 Funde.',
};

export default function OrienteeringPage(): ReactElement {
    return (
        <>
            <h1>Geocaching</h1>
            <p>
                Seit Mai 2018 bin ich begeisterter Geocacher. Ich bin
                hauptsächlich in der Schweiz unterwegs und habe bereits über
                9000 Funde.
                <br />
                Mein Nickname ist <b>froggy1407</b>.
            </p>

            <div className="mt-5 flex flex-col flex-wrap items-center justify-center">
                <h2 className="text-secondary py-5 text-2xl font-bold">
                    Meine Statistiken
                </h2>
                <Link href="https://project-gc.com/ProfileStats/froggy1407">
                    <Image
                        alt="Project-GC"
                        src="https://cdn2.project-gc.com/ProfileStatsImage/froggy1407"
                        width="0"
                        height="0"
                        className="bg-primary h-auto w-full max-w-3xl rounded-2xl"
                        unoptimized
                    />
                </Link>
            </div>
        </>
    );
}
