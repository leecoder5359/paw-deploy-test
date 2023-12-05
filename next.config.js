const withPWA = require("next-pwa");

const config = {
  reactStrictMode: true,
  transpilePackages: ['jotai-devtools'],
}

const nextConfig = withPWA({
  dest: "public",
  runtimeCaching: [],
})(config);

module.exports = nextConfig;