import { Metadata } from 'next';
import React, { ReactElement } from 'react';

export const metadata: Metadata = {
    title: 'Apple vs. Apples - Nils Hindermann',
    description: `Apple vs. Apples ist ein Spiel, das ich in Java entwickelt habe.
    Die ersten Ansätze habe ich im Alter von 10 Jahren gemacht.
    Das Spiel wurde mehrmals von Grund auf neu entwickelt.
    Einige Versionen sind noch vorhanden.`,
};

export default function AppleVsApplesPage(): ReactElement {
    return (
        <>
            <h2>Über das Spiel</h2>
            <p className="mb-2">
                <b>Apple vs. Apples</b> ist ein Spiel, das ich in Java
                entwickelt habe. Die ersten Ansätze habe ich im Alter von 10
                Jahren gemacht. Das Spiel wurde mehrmals von Grund auf neu
                entwickelt. Einige Versionen sind noch vorhanden. Es ist ein
                Einzelspieler-Spiel, bei dem man gegen Äpfel kämpft. Dazu kann
                man Münzen sammeln und später im Shop Upgrades kaufen.
                Allerdings ist der Shop noch nicht implementiert.
            </p>

            <div className="divider" />

            <p className="mb-2">
                Im Spiel gibt es den Spieler, den du steuerst. Dann gibt es noch
                andere Arten von Äpfel.
            </p>

            <p className="mb-2">
                Die roten Äpfel sind deine Gegner. Weiche ihnen aus und töte
                sie, um Punkte zu holen.
                <br />
                Um deine Gegner zu töten, kannst du die Pistole in deinem
                Inventar benutzen.
                <br />
                Wenn du eine bestimmte Anzahl von Punkten erreicht hast, wirst
                du ins nächste Level gebracht.
                <br />
                Aktuell gibt es nur <b>zwei</b> Level, aber es werden noch mehr!
            </p>

            <p className="mb-2">
                Die gelben Äpfel dienen zur Auffüllen deiner Leben. Du hast 10
                Herzen, die sich nicht einfach so erholen.
                <br />
                Sammle diese Äpfel, um jeweils ein Herz aufzufüllen.
                <br />
                Es sind immer <b>fünf</b> gelbe Äpfel in der Welt. Aber gib
                acht, sie bleiben nur 10 Sekunden an Ort und Stelle. Dann werden
                sie zufällig an einen neuen Ort teleportiert.
            </p>

            <p className="mb-2">
                Mit der Pistole in deinem Inventar kannst du deine Gegner töten.
                Je nach Schwierigkeitsgrad macht sie mehr oder weniger Schaden.
            </p>
        </>
    );
}
