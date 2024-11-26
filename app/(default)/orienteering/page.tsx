import { seasons } from '@/data/orienteering_seasons';
import { Metadata } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'OL - Nils Hindermann',
    description:
        'Orientierungslauf (OL) ist eines meiner Hobbys seit 2012 und ich bin in der OLG Stäfa tätig.',
};

export default function OrienteeringPage(): ReactElement {
    const currentSeason = seasons.find(
        (season) => season.year === new Date().getFullYear(),
    );

    return (
        <>
            <h1 className="text-primary mb-5 text-4xl font-bold">
                Orientierungslauf
            </h1>
            <p>
                OL ist eines meiner Hobbys. Ich bin Mitglied bei der OLG Stäfa.
            </p>
            {(currentSeason && (
                <p>
                    Aktuell laufe ich in der Kategorie{' '}
                    <b>{currentSeason.category}</b> mit dem Ziel, ein gutes
                    Resultat in der{' '}
                    <Link
                        href={`https://www.o-l.ch/cgi-bin/pliste?cat=${currentSeason.category}&result=list&year=${currentSeason.year}`}
                        target="_blank"
                    >
                        Jahrespunkteliste
                    </Link>{' '}
                    zu erreichen.
                    {currentSeason.additionalCategories && (
                        <>
                            {' '}
                            {currentSeason.additionalCategories.length === 1
                                ? 'Zusätzlich laufe ich in der Kategorie '
                                : 'Zusätzlich laufe ich in den Kategorien '}{' '}
                            {currentSeason.additionalCategories.join(', ')}.
                        </>
                    )}
                </p>
            )) || <p>Ich habe keine aktive Saison.</p>}
            <h2 className="mt-5 text-2xl font-bold text-primary">
                Vergangene Saisons
            </h2>
            <ul>
                {[...seasons]
                    .reverse()
                    .filter((season) => season !== currentSeason)
                    .map((season) => (
                        <li key={season.year}>
                            <p>
                                <span className="text-primary">
                                    {season.year}
                                </span>{' '}
                                &ndash; <b>{season.category}</b>
                                {season.additionalCategories && (
                                    <>
                                        ,{' '}
                                        {season.additionalCategories.join(', ')}
                                    </>
                                )}{' '}
                                &ndash;{' '}
                                <Link
                                    href={`https://www.o-l.ch/cgi-bin/pliste?cat=${season.category}&result=list&year=${season.year}`}
                                    target="_blank"
                                >
                                    Jahrespunkteliste
                                </Link>
                            </p>
                        </li>
                    ))}
            </ul>
        </>
    );
}
