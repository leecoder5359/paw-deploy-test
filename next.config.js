const withPWA = require('next-pwa');

const config = {
    reactStrictMode: true,
    transpilePackages: ['jotai-devtools'],
};

const nextConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    customWorkerDir: 'worker',
    runtimeCaching: [],
})(config);

module.exports = nextConfig;
