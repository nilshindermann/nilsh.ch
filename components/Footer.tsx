import SocialMediaLinks from '@/components/SocialMediaLinks';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function Footer(): ReactElement {
    return (
        <footer className="footer footer-center rounded bg-neutral p-10 text-neutral-content">
            <nav className="grid grid-flow-col gap-4">
                <Link className="link-hover link" href="/about">
                    Über mich
                </Link>
                <Link className="link-hover link" href="/contact">
                    Kontakt
                </Link>
                <Link className="link-hover link" href="/projects">
                    Projekte
                </Link>
            </nav>
            <SocialMediaLinks />
            <aside>
                <p>Copyright &copy; 2024 - Nils Hindermann</p>
            </aside>
        </footer>
    );
}
