export interface ProjectLink {
    href: string;
    label: string;
}

export interface Project {
    name: string;
    isActive: boolean;
    links?: Array<ProjectLink>;
}

export const projects: Array<Project> = [
    {
        name: 'Diese Webseite',
        isActive: true,
        links: [
            {
                href: 'https://github.com/nilshindermann/nilsh.ch',
                label: 'Sourcecode',
            },
        ],
    },
    {
        name: 'Drag Droppy',
        isActive: true,
        links: [
            {
                href: 'https://dragdroppy.nilsh.ch',
                label: 'Zum Spiel',
            },
        ],
    },
    {
        name: 'Memories',
        isActive: true,
        links: [
            {
                href: 'https://memories.nilsh.ch',
                label: 'Zur Webseite',
            },
        ],
    },
    {
        name: 'Diverse Projekte für Fachmodule an der TBZ',
        isActive: false,
        links: [
            {
                href: 'https://m152.nilsh.ch/',
                label: 'M152',
            },
            {
                href: 'https://github.com/code-with-nils/Parkgarage-Romer-Hindermann',
                label: 'M242',
            },
        ],
    },
    {
        name: 'Azubi Management Tool',
        isActive: false,
    },
    {
        name: 'LWZO 2021 – Covid Game (Jurypreis gewonnen)',
        isActive: false,
    },
    {
        name: 'LWZO 2020 – Spielhöhle',
        isActive: false,
    },
];
