import type { Metadata } from "next";
import { ClubPage } from "@/components/ClubPage";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

const title = "ATDSK";
const description =
  "Adana Open’ın ev sahibi Adana Tenis, Dağ ve Su Sporları Kulübü. 1969’dan beri Seyhan Baraj Gölü kıyısında 16 kort ve uluslararası tenis altyapısı.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/atdsk" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE_URL}/atdsk`,
    siteName: "Adana Open",
    title: "ATDSK | Adana Open",
    description,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
      {
        url: "/media/hero/venue-overview.jpg",
        width: 1920,
        height: 1771,
        alt: "ATDSK tesisleri, Seyhan Baraj Gölü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATDSK | Adana Open",
    description,
    images: [OG_IMAGE.url],
  },
};

export default function Page() {
  return <ClubPage />;
}
