/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // simple test
            {
                source: '/icon',
                destination: '/about',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
