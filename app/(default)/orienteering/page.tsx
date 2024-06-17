import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'OL - Nils Hindermann',
    description:
        'Orientierungslauf (OL) ist eines meiner Hobbys seit 2013 und ich bin in der OLG Stäfa tätig.',
};

export default function OrienteeringPage(): ReactElement {
    return (
        <>
            <h1 className="mb-5 text-4xl font-bold text-primary">
                Orientierungslauf
            </h1>
            <p>
                OL ist eines meiner Hobbys. Seit 2013 bin ich Mitglied der OLG
                Stäfa.
            </p>
            <p>
                Aktuell laufe ich in der Kategorie <b>HAK</b> mit dem Ziel, ein
                gutes Resultat in der{' '}
                <Link
                    href="https://www.o-l.ch/cgi-bin/pliste?cat=HAK&result=list"
                    target="_blank"
                >
                    Jahrespunkteliste
                </Link>{' '}
                zu erreichen.
            </p>
        </>
    );
}
