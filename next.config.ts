import type { NextConfig } from "next";
import { PAGE_PATHS } from "./src/lib/routes";

const nextConfig: NextConfig = {
  async headers() {
    const htmlCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, s-maxage=60, must-revalidate",
      },
    ];

    return PAGE_PATHS.map((source) => ({ source, headers: htmlCache }));
  },
};

export default nextConfig;
