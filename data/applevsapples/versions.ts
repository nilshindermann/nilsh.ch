export interface Version {
    name: string;
    date: Date;
    download: string;
}

export const versions: Array<Version> = [
    {
        name: 'Alpha 0.1 Dev Build 4',
        date: new Date(2020, 4 - 1, 11),
        download:
            'https://github.com/nilshindermann/AppleVsApples/releases/download/Alpha-0.1-4/Apple.vs.Apples.0.1-4-Alpha.jar',
    },
    {
        name: 'Alpha 0.1 Dev Build 3',
        date: new Date(2020, 3 - 1, 31),
        download:
            'https://github.com/nilshindermann/AppleVsApples/releases/download/Alpha-0.1-3/Apple-vs-Apples-0.1_3-Alpha.jar',
    },
];
