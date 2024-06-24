import { ReactElement } from 'react';

import s from './legal.module.css';

export default function LegalLayout({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    return <div className={s.legal}>{children}</div>;
}
