import Link from 'next/link';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
    return (
        <>
            <h1 className="font-sans text-4xl font-bold text-primary md:text-6xl">
                Nils Hindermann
            </h1>
            <p className="mt-8 text-xl ">
                Hi, ich bin Nils Hindermann 😊
                <br />
                Meine Hobbys sind Orientierungslauf & Geocaching.
            </p>

            <p className="mt-8 text-xl">
                In meiner Freizeit fotografiere ich gerne. Einige Fotos poste
                ich auf{' '}
                <Link
                    href="https://l.nilsh.ch/ig"
                    target="_blank"
                    className="link link-primary transition-colors hover:text-sky-200"
                >
                    Instagram
                </Link>
                .
            </p>
        </>
    );
}
