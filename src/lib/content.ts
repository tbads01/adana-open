export type Locale = "tr" | "en";

export type Messages = {
  meta: { title: string; description: string };
  kicker: string;
  headline: string;
  sub: string;
  coming: string;
  date: string;
  place: string;
  follow: string;
  notify: string;
  emailPlaceholder: string;
  submit: string;
  submitted: string;
  rights: string;
};

export const content: Record<Locale, Messages> = {
  tr: {
    meta: {
      title: "Adana Open | WTA 125 — Yakında",
      description:
        "Adana Open WTA 125 yakında hizmetinizde. 26 Eylül – 4 Ekim 2026, ATDSK · adanaopen.com",
    },
    kicker: "İlk kez · WTA 125",
    headline: "Yakında hizmetinizde.",
    sub: "Dünya tenisi Adana’ya geliyor. Prestijli WTA 125 turnuvası için resmi site çok yakında yayında.",
    coming: "Coming soon",
    date: "26 Eylül – 4 Ekim 2026",
    place: "ATDSK · Adana",
    follow: "Takip edin",
    notify: "Haberdar olun",
    emailPlaceholder: "E-posta adresiniz",
    submit: "Kaydet",
    submitted: "Teşekkürler — haberiniz olacak.",
    rights: "© 2026 Adana Open · adanaopen.com",
  },
  en: {
    meta: {
      title: "Adana Open | WTA 125 — Coming Soon",
      description:
        "Adana Open WTA 125 is coming soon. 26 September – 4 October 2026, ATDSK · adanaopen.com",
    },
    kicker: "Inaugural edition · WTA 125",
    headline: "Coming soon.",
    sub: "World-class tennis is coming to Adana. The official site for the prestigious WTA 125 tournament launches shortly.",
    coming: "Yakında",
    date: "26 September – 4 October 2026",
    place: "ATDSK · Adana",
    follow: "Follow",
    notify: "Get notified",
    emailPlaceholder: "Your email address",
    submit: "Notify me",
    submitted: "Thank you — we’ll be in touch.",
    rights: "© 2026 Adana Open · adanaopen.com",
  },
};
