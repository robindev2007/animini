/** @type {import('next').NextConfig} */
/**
 * @type {import('next').NextConfig}
 */

import bundleAnalyzer from "@next/bundle-analyzer";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA =
  process.env.NODE_ENV === "production"
    ? withPWAInit({
        dest: "public",
      })
    : (confing) => confing;

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogocdn.net",
      },
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
    ],
  },
};

export default withBundleAnalyzer(withPWA(nextConfig));
