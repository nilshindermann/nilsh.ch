import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'About me - Nils Hindermann',
    description: 'Find out more about Nils Hindermann',
};

export default function AboutPage(): ReactElement {
    return <h1>About me</h1>;
}
