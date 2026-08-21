export type Locale = "tr" | "en";

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    venue: string;
    schedule: string;
    experience: string;
    partners: string;
    contact: string;
    tickets: string;
  };
  hero: {
    kicker: string;
    headline: string;
    sub: string;
    ctaExplore: string;
    ctaTickets: string;
    ctaPartners: string;
    ctaNotify: string;
    dateLabel: string;
    date: string;
    place: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    facts: { label: string; value: string }[];
  };
  venue: {
    eyebrow: string;
    title: string;
    body: string;
    host: string;
    addressLabel: string;
    address: string;
    capacityLabel: string;
    capacity: string;
    courtsLabel: string;
    courts: string;
    clubFacts: { label: string; value: string }[];
    mapCta: string;
    clubCta: string;
  };
  schedule: {
    eyebrow: string;
    title: string;
    note: string;
    days: { day: string; date: string; items: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    body: string;
    disclaimer: string;
    areas: { title: string; desc: string; image: string }[];
  };
  partners: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    tiers: { name: string; price: string; highlight: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    notify: string;
    emailPlaceholder: string;
    submit: string;
    submitted: string;
    instagram: string;
    emailLabel: string;
    phoneLabel: string;
    hostLabel: string;
  };
  footer: {
    rights: string;
    wta: string;
  };
};

export const content: Record<Locale, Messages> = {
  tr: {
    meta: {
      title: "Adana Open | WTA 125",
      description:
        "Adana Open, ATDSK ev sahipliğinde düzenlenen prestijli WTA 125 kadınlar tenis turnuvasıdır. 26 Eylül – 4 Ekim 2026 · adanaopen.com",
    },
    nav: {
      about: "Turnuva",
      venue: "Mekan",
      schedule: "Program",
      experience: "Deneyim",
      partners: "Sponsorluk",
      contact: "İletişim",
      tickets: "Biletler",
    },
    hero: {
      kicker: "İlk kez · WTA 125",
      headline: "Dünya tenisi Adana’da.",
      sub: "125.000 USD ödüllü prestijli WTA 125 turnuvası, Adana Tenis, Dağ ve Su Sporları Kulübü’nde ilk kez.",
      ctaExplore: "Turnuvayı keşfet",
      ctaTickets: "Biletler",
      ctaPartners: "Sponsor ol",
      ctaNotify: "Haberdar ol",
      dateLabel: "Tarih",
      date: "26 Eylül – 4 Ekim 2026",
      place: "ATDSK · Adana",
    },
    about: {
      eyebrow: "Turnuva",
      title: "Türkiye’nin yeni WTA 125 durağı",
      body: [
        "Adana Open, Adana Tenis, Dağ ve Su Sporları Kulübü (ATDSK) ev sahipliğinde düzenlenen, toplam 125.000 USD ödüllü prestijli bir WTA 125 kadınlar tenis turnuvasıdır.",
        "Dünya sıralamasında ilk 250’de yer alan profesyonel kadın tenisçileri Adana’da bir araya getiren organizasyon, uluslararası tenis takviminin önemli duraklarından biri olmayı hedeflemektedir.",
        "Adana’nın spor kenti kimliğini güçlendiren turnuva; sporcuları, tenis tutkunlarını ve paydaşları aynı platformda buluşturarak şehrin uluslararası tanıtımına katkı sağlar.",
      ],
      facts: [
        { label: "Kategori", value: "WTA 125" },
        { label: "Ödül havuzu", value: "$125.000" },
        { label: "Eleme", value: "26–27 Eylül" },
        { label: "Ana tablo", value: "28 Eylül – 4 Ekim" },
        { label: "Final", value: "4 Ekim 2026" },
        { label: "Ev sahibi", value: "ATDSK" },
      ],
    },
    venue: {
      eyebrow: "Mekan",
      title: "Seyhan kenarında dünya sahnesi",
      body: "Turnuva, 1969’dan beri Türk tenisine yön veren ATDSK’nin Seyhan Baraj Gölü kıyısındaki tesislerinde düzenlenir. 16 kort, protokol alanları ve kulüp deneyimiyle uluslararası standartta bir hafta.",
      host: "Adana Tenis, Dağ ve Su Sporları Kulübü (ATDSK)",
      addressLabel: "Adres",
      address:
        "Adnan Menderes Bulvarı, Seyhan Baraj Gölü yanı, Çukurova / Adana",
      capacityLabel: "Merkez Kort",
      capacity: "1.250–1.500 kişi · 2 seyirci + 1 protokol tribünü",
      courtsLabel: "İpek & Çağla Kortları",
      courts: "500 kişi kapasiteli yan kortlar",
      clubFacts: [
        { label: "Kulüp kortları", value: "16 kort" },
        { label: "Kapalı / sert / toprak", value: "2 · 10 · 6" },
        { label: "Health Center", value: "3.000 m²" },
        { label: "Kuruluş", value: "1969" },
      ],
      mapCta: "Haritada aç",
      clubCta: "ATDSK’yi ziyaret et",
    },
    schedule: {
      eyebrow: "Program",
      title: "Turnuva takvimi",
      note: "Detaylı order of play ve seans saatleri turnuvaya yaklaştıkça yayınlanacaktır.",
      days: [
        {
          day: "Cumartesi–Pazar",
          date: "26–27 Eylül",
          items: "Eleme turları",
        },
        {
          day: "Pazartesi",
          date: "28 Eylül",
          items: "Ana tablo başlangıcı · Tekler & çiftler",
        },
        {
          day: "Hafta içi",
          date: "29 Eylül – 3 Ekim",
          items: "Ana tablo · Çeyrek ve yarı finaller",
        },
        {
          day: "Pazar",
          date: "4 Ekim",
          items: "Final günü · Şampiyonluk",
        },
      ],
    },
    experience: {
      eyebrow: "Deneyim",
      title: "Kortun ötesinde bir festival",
      body: "Maç izlemenin yanında fan zone, food court, havuz kenarı ve sponsor aktivasyonlarıyla dolu bir turnuva atmosferi.",
      disclaimer:
        "Bazı görseller konsept çalışmasıdır; uygulama aşamasında farklılık gösterebilir. Kulüp fotoğrafları ATDSK tesislerinden alınmıştır.",
      areas: [
        {
          title: "Merkez Kort",
          desc: "Ana sahne. Uluslararası maçlar ve protokol tribünü.",
          image: "/venue/court-1.jpg",
        },
        {
          title: "Kulüp Kortları",
          desc: "ATDSK’nin 16 kortluk altyapısı ve yan sahalar.",
          image: "/venue/court-2.jpg",
        },
        {
          title: "Teras & Ağırlama",
          desc: "Seyirci ve protokol için kulüp terası deneyimi.",
          image: "/venue/atdsk-12.jpg",
        },
        {
          title: "Fan Zone",
          desc: "LED ekranlı sosyal alanlar ve turnuva enerjisi.",
          image: "/venue/fan-zone.jpg",
        },
        {
          title: "Food Court",
          desc: "Yeme-içme stantları ve gün boyu gastronomi.",
          image: "/venue/food-court.jpg",
        },
        {
          title: "Havuz Kenarı",
          desc: "Seyhan manzaralı oturum ve misafir alanları.",
          image: "/venue/pool.jpg",
        },
      ],
    },
    partners: {
      eyebrow: "Sponsorluk",
      title: "Markanızı dünya tenisine bağlayın",
      body: "Ana, Co, Altın, Gümüş ve Destek paketleriyle WTA sahnesinde görünürlük, VIP ağırlama ve özel aktivasyon hakları.",
      cta: "Sponsorluk için yazın",
      tiers: [
        {
          name: "Ana Sponsor",
          price: "3.000.000 TL",
          highlight: "Unvan hakkı · kort içi öncelik · VIP & aktivasyon",
        },
        {
          name: "Co Sponsor",
          price: "1.500.000 TL",
          highlight: "Alan isim hakkı · gala · 50 m² deneyim alanı",
        },
        {
          name: "Altın",
          price: "750.000 TL",
          highlight: "LED & dijital görünürlük · 25 m² aktivasyon",
        },
        {
          name: "Gümüş",
          price: "500.000 TL",
          highlight: "16 m² tanıtım alanı · iletişim hakları",
        },
        {
          name: "Destek Sponsoru",
          price: "250.000 TL",
          highlight: "Kategori unvanı · saha içi konumlandırma",
        },
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Birlikte servis atalım",
      body: "Bilet, basın, sponsorluk ve turnuva sorularınız için bize yazın. Güncel duyurular için Instagram’ı takip edin.",
      notify: "Haberdar olun",
      emailPlaceholder: "E-posta adresiniz",
      submit: "Kaydet",
      submitted: "Teşekkürler — haberiniz olacak.",
      instagram: "@adana.open",
      emailLabel: "E-posta",
      phoneLabel: "Telefon",
      hostLabel: "Ev sahibi kulüp",
    },
    footer: {
      rights: "© 2026 Adana Open · adanaopen.com",
      wta: "WTA 125 turnuvası · ATDSK ev sahipliğinde",
    },
  },
  en: {
    meta: {
      title: "Adana Open | WTA 125",
      description:
        "Adana Open is a prestigious WTA 125 women’s tennis tournament hosted by ATDSK. 26 September – 4 October 2026 · adanaopen.com",
    },
    nav: {
      about: "Tournament",
      venue: "Venue",
      schedule: "Schedule",
      experience: "Experience",
      partners: "Partners",
      contact: "Contact",
      tickets: "Tickets",
    },
    hero: {
      kicker: "Inaugural edition · WTA 125",
      headline: "World-class tennis comes to Adana.",
      sub: "A prestigious $125,000 WTA 125 event, hosted for the first time at Adana Tennis, Mountain and Water Sports Club.",
      ctaExplore: "Explore the tournament",
      ctaTickets: "Tickets",
      ctaPartners: "Become a partner",
      ctaNotify: "Get notified",
      dateLabel: "Dates",
      date: "26 September – 4 October 2026",
      place: "ATDSK · Adana",
    },
    about: {
      eyebrow: "Tournament",
      title: "Türkiye’s new WTA 125 destination",
      body: [
        "Adana Open is a prestigious WTA 125 women’s tennis tournament with a total prize purse of USD 125,000, hosted by Adana Tennis, Mountain and Water Sports Club (ATDSK).",
        "Bringing together professional players ranked inside the world’s top 250, the event aims to become a landmark stop on the international tennis calendar.",
        "Strengthening Adana’s identity as a sporting city, the tournament unites athletes, fans and partners — amplifying the city’s global visibility.",
      ],
      facts: [
        { label: "Category", value: "WTA 125" },
        { label: "Prize money", value: "$125,000" },
        { label: "Qualifying", value: "26–27 September" },
        { label: "Main draw", value: "28 September – 4 October" },
        { label: "Final", value: "4 October 2026" },
        { label: "Host", value: "ATDSK" },
      ],
    },
    venue: {
      eyebrow: "Venue",
      title: "A lakeside stage for the world",
      body: "The tournament is staged at ATDSK’s grounds beside Seyhan Dam Lake — a club guiding Turkish tennis since 1969. Sixteen courts, protocol areas and a full club experience for an international week of tennis.",
      host: "Adana Tennis, Mountain and Water Sports Club (ATDSK)",
      addressLabel: "Address",
      address:
        "Adnan Menderes Boulevard, next to Seyhan Dam Lake, Çukurova / Adana",
      capacityLabel: "Center Court",
      capacity: "1,250–1,500 seats · 2 spectator + 1 protocol stand",
      courtsLabel: "İpek & Çağla Courts",
      courts: "Side courts with 500-seat capacity",
      clubFacts: [
        { label: "Club courts", value: "16 courts" },
        { label: "Indoor / hard / clay", value: "2 · 10 · 6" },
        { label: "Health Center", value: "3,000 m²" },
        { label: "Founded", value: "1969" },
      ],
      mapCta: "Open in Maps",
      clubCta: "Visit ATDSK",
    },
    schedule: {
      eyebrow: "Schedule",
      title: "Tournament calendar",
      note: "Detailed order of play and session times will be published closer to the event.",
      days: [
        {
          day: "Saturday–Sunday",
          date: "26–27 September",
          items: "Qualifying rounds",
        },
        {
          day: "Monday",
          date: "28 September",
          items: "Main draw begins · Singles & doubles",
        },
        {
          day: "Weekdays",
          date: "29 September – 3 October",
          items: "Main draw · Quarters & semifinals",
        },
        {
          day: "Sunday",
          date: "4 October",
          items: "Finals day · Champions crowned",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "More than match point",
      body: "Beyond the tennis: fan zones, food court, poolside lounges and partner activations create a full festival atmosphere.",
      disclaimer:
        "Some visuals are concept studies and may differ in final delivery. Club photos are from ATDSK facilities.",
      areas: [
        {
          title: "Center Court",
          desc: "The main stage. International matches and protocol seating.",
          image: "/venue/court-1.jpg",
        },
        {
          title: "Club Courts",
          desc: "ATDSK’s 16-court infrastructure and side courts.",
          image: "/venue/court-2.jpg",
        },
        {
          title: "Terrace & Hospitality",
          desc: "Club terrace hospitality for fans and protocol guests.",
          image: "/venue/atdsk-12.jpg",
        },
        {
          title: "Fan Zone",
          desc: "LED screens, social spaces and tournament energy.",
          image: "/venue/fan-zone.jpg",
        },
        {
          title: "Food Court",
          desc: "Food & beverage stands and all-day hospitality.",
          image: "/venue/food-court.jpg",
        },
        {
          title: "Poolside",
          desc: "Lakeside lounge and guest areas.",
          image: "/venue/pool.jpg",
        },
      ],
    },
    partners: {
      eyebrow: "Partnership",
      title: "Put your brand on the WTA stage",
      body: "Title, Co, Gold, Silver and Supporting packages deliver visibility, VIP hospitality and exclusive activation rights.",
      cta: "Request sponsorship details",
      tiers: [
        {
          name: "Title Partner",
          price: "TRY 3,000,000",
          highlight: "Naming rights · on-court priority · VIP & activation",
        },
        {
          name: "Co Partner",
          price: "TRY 1,500,000",
          highlight: "Area naming · gala · 50 m² experience space",
        },
        {
          name: "Gold",
          price: "TRY 750,000",
          highlight: "LED & digital presence · 25 m² activation",
        },
        {
          name: "Silver",
          price: "TRY 500,000",
          highlight: "16 m² promo space · communications rights",
        },
        {
          name: "Supporting",
          price: "TRY 250,000",
          highlight: "Category title · on-site placement",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s serve together",
      body: "Reach us for tickets, media, partnership and tournament enquiries. Follow Instagram for the latest announcements.",
      notify: "Get notified",
      emailPlaceholder: "Your email address",
      submit: "Notify me",
      submitted: "Thank you — we’ll be in touch.",
      instagram: "@adana.open",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hostLabel: "Host club",
    },
    footer: {
      rights: "© 2026 Adana Open · adanaopen.com",
      wta: "A WTA 125 tournament · Hosted by ATDSK",
    },
  },
};
