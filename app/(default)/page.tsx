import { ReactElement } from 'react';
import Link from '@/components/link';

export default function Home(): ReactElement {
    return (
        <div className="flex h-full flex-col items-center justify-center text-center">
            <h1>Willkommen bei Nils&nbsp;Hindermann</h1>
            <p className="mt-10 text-xl">
                Hi, ich bin Nils Hindermann 😊
                <br />
                Meine Hobbys sind Orientierungslauf & Geocaching.
            </p>

            <p className="mt-8 text-xl">
                In meiner Freizeit fotografiere ich gerne. Einige Fotos poste
                ich auf <Link href="https://l.nilsh.ch/ig">Instagram</Link>.
            </p>
        </div>
    );
}
