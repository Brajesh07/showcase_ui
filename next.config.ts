import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  transpilePackages: ["pdfjs-dist"],
};

export default nextConfig;
