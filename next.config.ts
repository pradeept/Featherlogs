import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"jsonplaceholder.typicode.com"
      }
    ]
  }
};

export default nextConfig;
