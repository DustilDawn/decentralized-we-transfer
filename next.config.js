/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  distDir: "dist",
};

module.exports = nextConfig;
