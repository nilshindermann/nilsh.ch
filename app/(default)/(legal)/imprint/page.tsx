import ContactEmail from '@/components/ContactEmail';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Impressum - Nils Hindermann',
    description: 'Hier befindet sich das Impressum von Nils Hindermann.',
};

export default function ImprintPage(): ReactElement {
    return (
        <>
            <h1>Impressum</h1>
            <div>
                <b>Verantwortliche Instanz:</b>
                <br />
                Nils Hindermann
                <br />
                Sunnentalstrasse 8b
                <br />
                8633 Wolfhausen
                <br />
                Schweiz
                <br />
                <strong>E-Mail</strong>: <ContactEmail email="hello@nilsh.ch" />
                <br />
                <br />
                <strong>Haftungsausschluss</strong>
                <br />
                Der Autor übernimmt keine Gewähr für die Richtigkeit,
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der
                Informationen.
                <br />
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder
                immaterieller Art, die aus dem Zugriff oder der Nutzung bzw.
                Nichtnutzung der veröffentlichten Informationen, durch
                Missbrauch der Verbindung oder durch technische Störungen
                entstanden sind, werden ausgeschlossen.
                <br />
                <br />
                Alle Angebote sind freibleibend. Der Autor behält es sich
                ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
                gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen
                oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                <br />
                <br />
                <strong>Haftungsausschluss für Inhalte und Links</strong>
                <br />
                Verweise und Links auf Webseiten Dritter liegen ausserhalb
                unseres Verantwortungsbereichs. Es wird jegliche Verantwortung
                für solche Webseiten abgelehnt. Der Zugriff und die Nutzung
                solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen
                Nutzers.
                <br />
                <br />
                <strong>Urheberrechtserklärung</strong>
                <br />
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf dieser Website, gehören ausschliesslich
                Nils Hindermann oder den speziell genannten Rechteinhabern. Für
                die Reproduktion jeglicher Elemente ist die schriftliche
                Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
                <br />
                <br />
                <strong>Quelle</strong>:{' '}
                <Link
                    href="https://brainbox.swiss/"
                    rel="nofollow"
                    target="_blank"
                >
                    BrainBox Solutions
                </Link>
            </div>
        </>
    );
}
