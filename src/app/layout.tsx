import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/Providers";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const title = "Adana Open | WTA 125 Adana 2026";
const description =
  "Adana Open, ATDSK ev sahipliğinde WTA 125 kadınlar tenis turnuvası. 26 Eylül – 4 Ekim 2026, Seyhan Baraj Gölü, Adana. Ödül havuzu 115.000 USD.";

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "Adana Open",
    "WTA 125",
    "Adana",
    "tenis",
    "tennis",
    "ATDSK",
    "Adana Tenis Dağ ve Su Sporları Kulübü",
    "WTA",
    "kadınlar tenisi",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: "Adana Tenis, Dağ ve Su Sporları Kulübü",
  category: "sports",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
      {
        url: "/media/hero/hero-main.jpg",
        width: 1536,
        height: 1024,
        alt: "Adana Open · ATDSK, Seyhan Baraj Gölü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  },
  other: {
    "geo.region": "TR-01",
    "geo.placename": "Adana",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1638" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void text-paper">
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
