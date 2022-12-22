const rewrites = () => [
    {
        source: '/api/:slug*',
        destination: 'http://localhost:5000/api/:slug*',
    },
];

const nextConfig = {
    reactStrictMode: true,
    rewrites,
};

module.exports = nextConfig;
