/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    SATANG_API: process.env.SATANG_API,
  },
};

module.exports = nextConfig;
