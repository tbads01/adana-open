import type { NextConfig } from "next";
import { PAGE_PATHS } from "./src/lib/routes";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_592_000,
    qualities: [70, 75],
    deviceSizes: [640, 828, 1080, 1280, 1600],
    imageSizes: [40, 64, 96, 128, 256, 384],
  },
  async headers() {
    const htmlCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, s-maxage=300, must-revalidate",
      },
    ];
    const mediaCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=604800, stale-while-revalidate=86400",
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
