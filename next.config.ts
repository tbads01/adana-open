import type { NextConfig } from "next";
import { PAGE_PATHS } from "./src/lib/routes";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    const htmlCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      },
    ];
    const mediaCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=2592000, stale-while-revalidate=86400",
      },
    ];

    return [
      ...PAGE_PATHS.map((source) => ({ source, headers: htmlCache })),
      { source: "/media/:path*", headers: mediaCache },
      { source: "/venue/:path*", headers: mediaCache },
      { source: "/logo-clear.png", headers: mediaCache },
      { source: "/logo-on-black.png", headers: mediaCache },
      { source: "/favicon.png", headers: mediaCache },
      { source: "/icon-192.png", headers: mediaCache },
      { source: "/icon-512.png", headers: mediaCache },
      { source: "/apple-touch-icon.png", headers: mediaCache },
    ];
  },
};

export default nextConfig;
