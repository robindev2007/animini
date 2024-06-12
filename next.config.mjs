// @ts-nocheck
import withPlaiceholder from "@plaiceholder/next";

import withPWAInit from "next-pwa";
/** @type {import('next').NextConfig} */
/**
 * @type {import('next').NextConfig}
 */
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

const withPWA =
  process.env.NODE_ENV === "production"
    ? withPWAInit({
        dest: "public",
      })
    : (config) => config;

export default withPlaiceholder(withPWA(nextConfig));
