import './legal.css';

import { ReactElement } from 'react';

export default function LegalLayout({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    return <div className="max-w-3xl p-4 text-left">{children}</div>;
}
