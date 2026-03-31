import Image from 'next/image';
import { ReactElement } from 'react';
import Link from '@/components/link';

import logo from '../assets/nilshindermann_logo.svg';

export default function Home(): ReactElement {
    return (
        <>
            <Image className="mb-8" src={logo} alt="nils hindermann" />
            <h1 className="text-primary font-sans text-4xl font-bold">
                Willkommen bei Nils&nbsp;Hindermann
            </h1>
            <p className="mt-8 text-xl">
                Hi, ich bin Nils Hindermann 😊
                <br />
                Meine Hobbys sind Orientierungslauf & Geocaching.
            </p>

            <p className="mt-8 text-xl">
                In meiner Freizeit fotografiere ich gerne. Einige Fotos poste
                ich auf <Link href="https://l.nilsh.ch/ig">Instagram</Link>.
            </p>
        </>
    );
}
