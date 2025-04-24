import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // generate a static export 
  eslint: {
    ignoreDuringBuilds: false, // ensure eslint runs during build
  },
};

export default nextConfig;
