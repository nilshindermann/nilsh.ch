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

    const buildLink = (category: string, year: number): string => {
        return `https://www.o-l.ch/cgi-bin/pliste?cat=${category}&result=list&year=${year}#:~:text=Nils%20Hindermann`;
    };

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
                        href={buildLink(
                            currentSeason.category,
                            currentSeason.year,
                        )}
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
                                : 'Zusätzlich laufe ich in den Kategorien '}
                            {currentSeason.additionalCategories.join(', ')}.
                        </>
                    )}
                </p>
            )) || <p>Ich habe keine aktive Saison.</p>}
            <h2 className="text-primary mt-5 text-2xl font-bold">
                Vergangene Saisons
            </h2>

            <div className="max-w-full overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Jahr</th>
                            <th>Kategorie(n)</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...seasons]
                            .reverse()
                            .filter((season) => season !== currentSeason)
                            .map((season) => (
                                <tr key={season.year}>
                                    <td>
                                        <span className="text-primary">
                                            {season.year}
                                        </span>
                                    </td>
                                    <td>
                                        <b>{season.category}</b>
                                        {season.additionalCategories && (
                                            <>
                                                ,{' '}
                                                {season.additionalCategories.join(
                                                    ', ',
                                                )}
                                            </>
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            href={buildLink(
                                                season.category,
                                                season.year,
                                            )}
                                            target="_blank"
                                        >
                                            Jahrespunkteliste
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
