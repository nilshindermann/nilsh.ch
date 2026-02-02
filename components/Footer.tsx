import SocialMediaLinks from '@/components/SocialMediaLinks';
import Link from 'next/link';
import { ReactElement } from 'react';

const links: { href: string; displayName: string }[] = [
    {
        href: '/imprint',
        displayName: 'Impressum',
    },
    {
        href: '/privacy',
        displayName: 'Datenschutz',
    },
    {
        href: '/contact',
        displayName: 'Kontakt',
    },
];

export default function Footer(): ReactElement {
    return (
        <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                {links.map(({ href, displayName }) => (
                    <Link
                        key={href}
                        className="link-hover link text-inherit"
                        href={href}
                    >
                        {displayName}
                    </Link>
                ))}
            </nav>
            <SocialMediaLinks />
            <aside>
                <p>Copyright &copy; 2025 - Nils Hindermann</p>
            </aside>
        </footer>
    );
}
