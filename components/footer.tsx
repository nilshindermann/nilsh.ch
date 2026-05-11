import SocialMediaLinks from '@/components/SocialMediaLinks';
import { ReactElement } from 'react';
import Link from '@/components/link';

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
    const year = new Date().getFullYear();

    return (
        <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10">
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
                <p>Copyright &copy; {year} - Nils Hindermann</p>
            </aside>
        </footer>
    );
}
