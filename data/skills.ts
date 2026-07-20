export interface SkillCategory {
    category: string;
    skills: Array<string>;
}

export const skillCategories: Array<SkillCategory> = [
    {
        category: 'Sprachen',
        skills: ['TypeScript', 'JavaScript', 'C#', 'Java'],
    },
    {
        category: 'Frameworks & Libraries',
        skills: ['Next.js', 'React', 'Tailwind CSS', 'daisyUI'],
    },
    {
        category: 'Tools & Plattformen',
        skills: ['Git', 'Cloudflare', 'Docker'],
    },
];
