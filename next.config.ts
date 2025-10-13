import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,

  // Optional: Configure base path if deploying to a subdirectory
  // basePath: '/repository-name',

  // Performance optimizations
  reactStrictMode: true,

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
