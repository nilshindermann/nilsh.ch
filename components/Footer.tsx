import { ReactElement } from 'react';

export default function Footer(): ReactElement {
    return (
        <div className="flex h-20 flex-shrink-0 items-center justify-center bg-sky-950 text-center">
            <p className="text-xl">
                Copyright &copy; 2023{' '}
                <span className="font-bold">Nils Hindermann</span>
            </p>
        </div>
    );
}
