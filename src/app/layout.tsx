import type { Metadata } from "next";
import { Syne, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adanaopen.com"),
  title: "Adana Open | WTA 125",
  description:
    "Adana Open, ATDSK ev sahipliğinde düzenlenen prestijli WTA 125 kadınlar tenis turnuvasıdır. 26 Eylül – 4 Ekim 2026 · adanaopen.com",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Adana Open | WTA 125",
    description:
      "World-class WTA 125 tennis comes to Adana. 26 September – 4 October 2026 at ATDSK.",
    url: "https://adanaopen.com",
    siteName: "Adana Open",
    images: ["/hero-court.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${serif.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
