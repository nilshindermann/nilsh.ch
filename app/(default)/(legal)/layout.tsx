import React from 'react';

import s from './legal.module.css';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return <div className={s.legal}>{children}</div>;
}
