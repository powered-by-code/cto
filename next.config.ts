import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "via.assets.so",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/decide",
        destination: "https://us.i.posthog.com/decide",
      },
      {
        source: "/e",
        destination: "https://us.i.posthog.com/e",
      },
      {
        source: "/s",
        destination: "https://us.i.posthog.com/s",
      },
      {
        source: "/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
