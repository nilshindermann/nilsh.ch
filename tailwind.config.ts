import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    daisyui: {
        themes: [
            {
                default: {
                    'primary': '#22d3ee',
                    'secondary': '#c3c3c3',
                    'accent': '#ffffff',
                    'neutral': 'rgb(8 47 73)',
                    'base-100': 'rgb(55, 65, 81)',
                    'info': '#cffafe',
                    'success': '#66da66',
                    'warning': '#fcd34d',
                    'error': '#ef4444',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
export default config;
