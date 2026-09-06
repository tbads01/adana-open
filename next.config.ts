import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const htmlCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, s-maxage=60, must-revalidate",
      },
    ];

    return [
      { source: "/", headers: htmlCache },
      { source: "/atdsk", headers: htmlCache },
    ];
  },
};

export default nextConfig;
