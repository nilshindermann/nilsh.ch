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
        <footer className="footer footer-center rounded bg-neutral p-10 text-neutral-content">
            <nav className="grid grid-flow-col gap-4">
                {links.map(({ href, displayName }) => (
                    <Link key={href} className="link-hover link text-inherit" href={href}>
                        {displayName}
                    </Link>
                ))}
            </nav>
            <SocialMediaLinks />
            <aside>
                <p>Copyright &copy; 2024 - Nils Hindermann</p>
            </aside>
        </footer>
    );
}
