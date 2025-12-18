export interface Season {
    year: number;
    category: string;
    additionalCategories?: Array<string>;
}

export const seasons: Array<Season> = [
    {
        year: 2012,
        category: 'H10',
    },
    {
        year: 2013,
        category: 'H10',
    },
    {
        year: 2014,
        category: 'H10',
    },
    {
        year: 2015,
        category: 'H12',
    },
    {
        year: 2016,
        category: 'H12',
    },
    {
        year: 2017,
        category: 'H14',
    },
    {
        year: 2018,
        category: 'H14',
    },
    {
        year: 2019,
        category: 'H16',
    },
    {
        year: 2020,
        category: 'H16',
    },
    {
        year: 2021,
        category: 'H18',
    },
    {
        year: 2022,
        category: 'H18',
    },
    {
        year: 2023,
        category: 'HAK',
    },
    {
        year: 2024,
        category: 'HAK',
        additionalCategories: ['HAM'],
    },
    {
        year: 2025,
        category: 'HAM',
    },
];
