/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['raw.githubusercontent.com'],
    },
};

export default nextConfig;
