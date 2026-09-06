import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adana Open",
    short_name: "Adana Open",
    description:
      "Adana Open, ATDSK ev sahipliğinde WTA 125 kadınlar tenis turnuvası. 26 Eylül – 4 Ekim 2026, Adana.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c1638",
    theme_color: "#0c1638",
    lang: "tr",
    icons: [
      { src: "/favicon.png", sizes: "64x64", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
