import type { Metadata } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';

import beRealImage from './IMG_8014.JPG';

export const metadata: Metadata = {
    title: 'Happy Birthday Reva!',
    description:
        'This is a special page which should not be indexed by search engines',
};

export default function RevaBirthdayPage(): ReactElement {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                <h1 className="my-10 text-6xl font-semibold text-primary">
                    Happy Birthday!
                </h1>
                <p className="my-10 text-4xl text-emerald-200 underline underline-offset-8">
                    20 Years Reva!
                </p>
                <Image
                    src={beRealImage}
                    alt="BeReal 26.03.2024"
                    className=" w-11/12 max-w-xs 2xl:max-w-sm"
                />
                <p className="my-10 text-2xl">
                    Alles alles guetiii zum Geburtstag!! 🥳🥳🥳
                </p>
                <p className="my-10 text-xl font-light italic text-secondary">
                    vo dim liebe Nils :)
                </p>
            </div>
        </div>
    );
}
