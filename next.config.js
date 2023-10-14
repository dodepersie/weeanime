/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  require: true,
  skipWaiting: true,
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
};

module.exports = nextConfig;
