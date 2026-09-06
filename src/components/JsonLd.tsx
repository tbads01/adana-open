import { INSTAGRAM, SITE_EMAIL, SITE_NAME, SITE_URL, WTA_URL } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsEvent",
        "@id": `${SITE_URL}/#event`,
        name: "Adana Open",
        description:
          "Adana Open, Adana Tenis, Dağ ve Su Sporları Kulübü (ATDSK) ev sahipliğinde düzenlenen WTA 125 kadınlar tenis turnuvasıdır.",
        url: SITE_URL,
        image: `${SITE_URL}/media/hero/hero-main.jpg`,
        startDate: "2026-09-26",
        endDate: "2026-10-04",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        sport: "Tennis",
        location: {
          "@type": "Place",
          name: "Adana Tenis, Dağ ve Su Sporları Kulübü (ATDSK)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Adnan Menderes Bulvarı, Seyhan Baraj Gölü yanı",
            addressLocality: "Adana",
            addressRegion: "Çukurova",
            addressCountry: "TR",
          },
        },
        organizer: { "@id": `${SITE_URL}/#organizer` },
        superEvent: {
          "@type": "SportsEvent",
          name: "WTA 125",
          url: WTA_URL,
        },
      },
      {
        "@type": "SportsOrganization",
        "@id": `${SITE_URL}/#organizer`,
        name: "Adana Tenis, Dağ ve Su Sporları Kulübü",
        alternateName: "ATDSK",
        url: "https://atdsk.com",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ["tr", "en"],
        publisher: { "@id": `${SITE_URL}/#organizer` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#brand`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        sameAs: [INSTAGRAM, WTA_URL],
        logo: `${SITE_URL}/media/brand/adana-open-logo.png`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
