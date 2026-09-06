export type Locale = "tr" | "en";

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    atdsk: string;
    about: string;
    players: string;
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
    headlineAccent: string;
    sub: string;
    ctaExplore: string;
    ctaTickets: string;
    ctaPartners: string;
    ctaNotify: string;
    dateLabel: string;
    date: string;
    place: string;
  };
  significance: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    quote: string;
    quoteAttr: string;
    pathwayLabel: string;
    pathway: { step: string; title: string; desc: string }[];
    namesLabel: string;
    names: string[];
    pillars: { title: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string[];
    facts: { label: string; value: string }[];
  };
  venue: {
    eyebrow: string;
    title: string;
    titleAccent: string;
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
    titleAccent: string;
    note: string;
    days: { day: string; date: string; items: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    disclaimer: string;
    areas: { title: string; desc: string; image: string }[];
  };
  players: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    note: string;
    mainLabel: string;
    turkeyLabel: string;
    watchLabel: string;
    rankLabel: string;
    playsLabel: string;
    ageLabel: string;
    wtaCta: string;
    right: string;
    left: string;
  };
  partners: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    soon: string;
    mainLabel: string;
    restLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
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
  tickets: {
    title: string;
    titleAccent: string;
    body: string;
  };
  club: {
    metaTitle: string;
    metaDescription: string;
    kicker: string;
    title: string;
    titleAccent: string;
    lead: string;
    body: string[];
    presidentLabel: string;
    president: string;
    presidentSince: string;
    visitLabel: string;
    websiteCta: string;
    mapCta: string;
    tournamentCta: string;
    facts: { label: string; value: string }[];
    facilitiesLabel: string;
    facilitiesAccent: string;
    facilities: { title: string; desc: string }[];
    missionEyebrow: string;
    missionTitle: string;
    missionAccent: string;
    visionTitle: string;
    visionAccent: string;
    visionBody: string;
  };
  footer: {
    rights: string;
    wta: string;
  };
};

export const content: Record<Locale, Messages> = {
  tr: {
    meta: {
      title: "Adana Open | WTA 125 Adana 2026",
      description:
        "Adana Open, ATDSK ev sahipliğinde WTA 125 kadınlar tenis turnuvası. 26 Eylül – 4 Ekim 2026, Seyhan Baraj Gölü, Adana. Ödül havuzu 115.000 USD.",
    },
    nav: {
      atdsk: "ATDSK",
      about: "Turnuva",
      players: "Oyuncular",
      venue: "Mekan",
      schedule: "Program",
      experience: "Deneyim",
      partners: "Sponsorluk",
      contact: "İletişim",
      tickets: "Biletler",
    },
    hero: {
      kicker: "İlk kez · WTA 125",
      headline: "Dünya tenisi",
      headlineAccent: "Adana’da.",
      sub: "115.000 USD ödüllü WTA 125 turnuvası, Adana Tenis, Dağ ve Su Sporları Kulübü’nde ilk kez.",
      ctaExplore: "ATDSK",
      ctaTickets: "Biletler",
      ctaPartners: "Sponsorluk",
      ctaNotify: "Haberdar ol",
      dateLabel: "Tarih",
      date: "26 Eylül – 4 Ekim 2026",
      place: "ATDSK · Adana",
    },
    significance: {
      eyebrow: "ATDSK",
      title: "Türk tenisi açısından neden önemli?",
      lead: "ATDSK yalnızca kulüp içindeki başarılarla yetinmez. Sporcularımız Türkiye Şampiyonalarından Tennis Europe ve ITF Junior turnuvalarına, ITF profesyonel turnuvalarından ATP ve WTA seviyesine, Roland Garros ve Wimbledon gibi Grand Slam organizasyonlarına kadar dünya tenisinin farklı seviyelerinde mücadele ediyor.",
      body: [
        "Kulübümüz bünyesindeki ve kulübümüzden yetişen sporcuların Türkiye şampiyonlukları, milli takım başarıları, uluslararası turnuva dereceleri, profesyonel tenis başarıları ve Grand Slam deneyimleri bulunuyor.",
        "WTA 125 Adana Open yalnızca bir turnuva değil; Adana’nın uluslararası tanıtımına ve marka şehir kimliğine katkı sağlayan bir organizasyondur.",
      ],
      quote:
        "ATDSK yalnızca tenis oynanan bir yer değil; dünya kortlarını hedefleyen tenisçilerin yetiştirildiği bir kulüp.",
      quoteAttr: "ATDSK",
      pathwayLabel: "Gelişim yolu",
      pathway: [
        {
          step: "01",
          title: "Altyapı",
          desc: "Farklı yaş gruplarında rekabetçi tenis kültürü ve uzun vadeli sporcu gelişimi.",
        },
        {
          step: "02",
          title: "Milli takım",
          desc: "Sporcularımız ve antrenörlerimiz Türkiye’yi uluslararası organizasyonlarda temsil ediyor.",
        },
        {
          step: "03",
          title: "ITF · ATP · WTA",
          desc: "Profesyonel takvimde mücadele; kulüpte ortak çalışma kültürü.",
        },
        {
          step: "04",
          title: "Grand Slam",
          desc: "Roland Garros ve Wimbledon deneyimi. Dünya kortlarına uzanan yol.",
        },
      ],
      namesLabel: "Altyapıdan Grand Slam’e",
      names: [
        "Yankı Erel",
        "Ergi Kırkın",
        "Berfu Cengiz",
        "Kaan Işık Koşaner",
        "Kuzey Kerem Bayrak",
      ],
      pillars: [
        {
          title: "Altyapıya yatırım",
          desc: "Başarıyı yalnızca kupa veya sıralamayla ölçmüyoruz. Disiplin, çalışma kültürü, karakter ve kulüp aidiyeti sistemimizin parçası.",
        },
        {
          title: "Profesyonel bağ",
          desc: "Grand Slam deneyimi yaşamış sporcular, gençlerle aynı kortları ve aynı kulüp kültürünü paylaşıyor.",
        },
        {
          title: "Türkiye’yi temsil",
          desc: "ATDSK’nın yetiştirdiği her başarılı sporcu yalnızca kulübün değil, Adana’nın ve Türkiye’nin sporcusu.",
        },
        {
          title: "Uluslararası vizyon",
          desc: "Vavassori Tennis Academy iş birliği ve dünya tenis camiasıyla kurulan köprüler, sporculara yeni kapılar açıyor.",
        },
      ],
    },
    about: {
      eyebrow: "Turnuva",
      title: "WTA 125",
      titleAccent: "Adana’da.",
      body: [
        "Adana Open, Adana Tenis, Dağ ve Su Sporları Kulübü (ATDSK) ev sahipliğinde düzenlenen, toplam 115.000 USD ödüllü bir WTA 125 kadınlar tenis turnuvasıdır.",
        "Dünyanın farklı ülkelerinden profesyonel tenisçilerin Adana’ya gelmesi; uluslararası tenis çevresinin, sporcuların, ekiplerin ve ziyaretçilerin şehirle buluşması anlamına geliyor.",
        "Bu nedenle WTA 125’i yalnızca bir tenis turnuvası olarak değil, Adana’nın uluslararası tanıtımına katkı sağlayan bir organizasyon olarak görüyoruz.",
      ],
      facts: [
        { label: "Kategori", value: "WTA 125" },
        { label: "Ödül havuzu", value: "$115.000" },
        { label: "Eleme", value: "26–27 Eylül" },
        { label: "Ana tablo", value: "28 Eylül – 4 Ekim" },
        { label: "Final", value: "4 Ekim 2026" },
        { label: "Ev sahibi", value: "ATDSK" },
      ],
    },
    venue: {
      eyebrow: "Mekan",
      title: "Seyhan kenarında",
      titleAccent: "dünya sahnesi.",
      body: "Turnuva, ATDSK’nin Seyhan Baraj Gölü kıyısındaki tesislerinde düzenlenir. 16 kort ve kulüp altyapısıyla uluslararası standartta bir organizasyon.",
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
      clubCta: "Kulüp hakkında",
    },
    schedule: {
      eyebrow: "Program",
      title: "Dokuz gün,",
      titleAccent: "bir şampiyon.",
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
      title: "Kortun",
      titleAccent: "ötesi.",
      body: "Merkez kort, fan zone, food court, havuz kenarı ve sponsor aktivasyon alanları.",
      disclaimer:
        "Bazı görseller konsept çalışmasıdır. Kulüp fotoğrafları ATDSK tesislerinden alınmıştır.",
      areas: [
        {
          title: "Fan Zone",
          desc: "Yeşil-beyaz stantlar, yeme-içme ve seyirci alanı.",
          image: "/media/ai/concept-03.jpg",
        },
        {
          title: "Merkez Kort",
          desc: "Ana kort ve protokol tribünü.",
          image: "/media/hero/venue-overview.jpg",
        },
        {
          title: "Kulüp Kortları",
          desc: "ATDSK’nin 16 kortluk altyapısı.",
          image: "/media/drone/drone-02.jpg",
        },
        {
          title: "Teras & Ağırlama",
          desc: "Kulüp terası ve misafir ağırlama.",
          image: "/media/drone/drone-11.jpg",
        },
        {
          title: "Food Court",
          desc: "Yeme-içme alanları.",
          image: "/media/ai/food-court.jpg",
        },
        {
          title: "Havuz Kenarı",
          desc: "Havuz kenarı oturum alanı.",
          image: "/media/drone/drone-07.jpg",
        },
      ],
    },
    players: {
      eyebrow: "Oyuncu listesi",
      title: "Ana tablo",
      titleAccent: "açıklandı.",
      lead: "Ana tabloya doğrudan kabul edilen 23 oyuncu belli. Dört wildcard, bir special exempt ve dört eleme kazananı henüz açıklanmadı.",
      note: "Liste 1 Eylül 2026 tarihli WTA commitment listesine göredir; kura yayınlanana kadar değişebilir.",
      mainLabel: "Ana tablo · doğrudan kabul",
      turkeyLabel: "Türkiye’den",
      watchLabel: "Takipteki isimler",
      rankLabel: "WTA",
      playsLabel: "Oyun",
      ageLabel: "Yaş",
      wtaCta: "WTA sayfası",
      right: "Sağ el",
      left: "Sol el",
    },
    partners: {
      eyebrow: "",
      title: "Partnerler ve sponsorlar",
      titleAccent: "",
      body: "Kort kenarı görünürlüğünde yer alan isimler. Yeni anlaşmalar açıklandıkça bu liste güncellenecek.",
      soon: "Daha fazla partner yakında.",
      mainLabel: "Ana sponsorlar",
      restLabel: "Partnerler",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bize",
      titleAccent: "yazın.",
      body: "Bilet, basın ve sponsorluk sorularınız için yazın. Duyurular için Instagram hesabını takip edin.",
      notify: "Haberdar olun",
      emailPlaceholder: "E-posta adresiniz",
      submit: "Kaydet",
      submitted: "Teşekkürler, kaydınız alındı.",
      instagram: "@adana.open",
      emailLabel: "E-posta",
      phoneLabel: "Telefon",
      hostLabel: "Ev sahibi kulüp",
    },
    tickets: {
      title: "Biletler",
      titleAccent: "",
      body: "Detaylı bilgi yakında.",
    },
    club: {
      metaTitle: "ATDSK | Adana Open",
      metaDescription:
        "Adana Open’ın ev sahibi Adana Tenis, Dağ ve Su Sporları Kulübü. 1969’dan beri Seyhan Baraj Gölü kıyısında 16 kort, Health Center ve uluslararası tenis altyapısı.",
      kicker: "Ev sahibi kulüp",
      title: "Adana Tenis, Dağ ve Su Sporları",
      titleAccent: "Kulübü",
      lead: "ATDSK, 1969’dan beri Seyhan Baraj Gölü kıyısında tenis oynanan bir yer değil; dünya kortlarını hedefleyen sporcuların yetiştiği bir kulüp.",
      body: [
        "Kulüp, Adnan Menderes Bulvarı’nda, göl kenarında 30 dönümlük bir tesiste faaliyet gösterir. Türkiye Tenis Federasyonu’nun master tenisçiler anketinde “Türkiye’nin 1 Numaralı Kulübü” seçilmiştir.",
        "Başkan Ali Refah Keskin’in 10 Ocak 2016’dan bu yana yürüttüğü yatırım programıyla ATDSK, Adana’yı uluslararası tenis takviminde bir durak haline getirmeyi hedefler. Adana Open WTA 125, bu vizyonun sahneye çıkışıdır.",
        "Altyapıdan milli takıma, ITF ve WTA’dan Grand Slam deneyimine uzanan yol; kulüp sporcularının, antrenörlerin ve Adana’nın ortak hikâyesidir.",
      ],
      presidentLabel: "Kulüp başkanı",
      president: "Ali Refah Keskin",
      presidentSince: "10 Ocak 2016’dan beri",
      visitLabel: "Ziyaret",
      websiteCta: "atdsk.com",
      mapCta: "Haritada aç",
      tournamentCta: "Turnuvaya dön",
      facts: [
        { label: "Kuruluş", value: "1969" },
        { label: "Tesis", value: "30 dönüm" },
        { label: "Kort", value: "16" },
        { label: "Kapalı / sert / toprak", value: "2 · 10 · 6" },
        { label: "Health Center", value: "3.000 m²" },
        { label: "Konum", value: "Seyhan" },
      ],
      facilitiesLabel: "Otuz dönüm,",
      facilitiesAccent: "on altı kort.",
      facilities: [
        {
          title: "16 profesyonel kort",
          desc: "2 kapalı hard, 8 açık hard ve 6 toprak kort. Toplam 16 kort, 30 dönümlük alanda.",
        },
        {
          title: "Health Center",
          desc: "3.000 m² kapalı alan: fitness, spa, masaj, sauna, açık seyir terası ve yüzme havuzu.",
        },
        {
          title: "Restoran ve teras",
          desc: "Yazlık ve kışlık üç restoran, ayrıca göl manzaralı teras restoran.",
        },
        {
          title: "Padel kortu",
          desc: "Kulüp bünyesinde padel altyapısı; milli takım seviyesinde sporcu yetiştiren bir ilkler kulübü.",
        },
        {
          title: "Sporcu odaları",
          desc: "Milli tenisçiler ve konuk sporcular için hazırlanan soyunma ve dinlenme alanları.",
        },
        {
          title: "Çocuk kulübü",
          desc: "Cumartesi–Pazar günleri gözetmen eşliğinde hizmet veren çocuk kulübü.",
        },
        {
          title: "HPTC tenis okulları",
          desc: "High Performance Tennis Center çatısında sınırlı kontenjanlı tenis okulları.",
        },
        {
          title: "Açık yüzme havuzu",
          desc: "Health Center kompleksinin parçası olan açık havuz ve oturum alanları.",
        },
      ],
      missionEyebrow: "Misyon",
      missionTitle: "Türk tenisine",
      missionAccent: "katkısı.",
      visionTitle: "Marka şehir",
      visionAccent: "Adana.",
      visionBody:
        "ATDSK, “Marka Şehir Adana” vizyonuyla şehri Avrupa ile Asya arasında bir tenis durağı haline getirmeyi hedefler. Vavassori Tennis Academy iş birliği ve İtalyan gelişim modeli, bu yolun parçasıdır. WTA 125 Adana Open de aynı hedefin sahadaki karşılığıdır.",
    },
    footer: {
      rights: "© 2026 Adana Open · adanaopen.com",
      wta: "WTA 125 turnuvası · ATDSK ev sahipliğinde",
    },
  },
  en: {
    meta: {
      title: "Adana Open | WTA 125 Adana 2026",
      description:
        "Adana Open is a WTA 125 women’s tennis tournament hosted by ATDSK. 26 September – 4 October 2026 at Seyhan Dam Lake, Adana. Prize money USD 115,000.",
    },
    nav: {
      atdsk: "ATDSK",
      about: "Tournament",
      players: "Players",
      venue: "Venue",
      schedule: "Schedule",
      experience: "Experience",
      partners: "Partners",
      contact: "Contact",
      tickets: "Tickets",
    },
    hero: {
      kicker: "Inaugural edition · WTA 125",
      headline: "World-class tennis",
      headlineAccent: "in Adana.",
      sub: "A $115,000 WTA 125 event, hosted for the first time at Adana Tennis, Mountain and Water Sports Club.",
      ctaExplore: "ATDSK",
      ctaTickets: "Tickets",
      ctaPartners: "Partnership",
      ctaNotify: "Get notified",
      dateLabel: "Dates",
      date: "26 September – 4 October 2026",
      place: "ATDSK · Adana",
    },
    significance: {
      eyebrow: "ATDSK",
      title: "Why this matters for Turkish tennis",
      lead: "ATDSK does not stop at club-level success. Our athletes compete across the game — from Turkish Championships to Tennis Europe and ITF Juniors, from professional ITF events to ATP and WTA, and on to Grand Slams such as Roland Garros and Wimbledon.",
      body: [
        "Players from the club have Turkish titles, national-team results, international rankings, professional wins and Grand Slam experience.",
        "WTA 125 Adana Open is more than a tournament. It is an international stage for Adana — and a statement of the city’s sporting identity.",
      ],
      quote:
        "ATDSK is not only a place to play tennis. It is a club that develops players who aim for the world’s courts.",
      quoteAttr: "ATDSK",
      pathwayLabel: "The pathway",
      pathway: [
        {
          step: "01",
          title: "Academy",
          desc: "Competitive tennis culture across age groups, and long-term player development.",
        },
        {
          step: "02",
          title: "National team",
          desc: "Our players and coaches represent Türkiye at international events.",
        },
        {
          step: "03",
          title: "ITF · ATP · WTA",
          desc: "Professional calendar competition — and the same work culture back at the club.",
        },
        {
          step: "04",
          title: "Grand Slam",
          desc: "Roland Garros and Wimbledon experience. A path that reaches the world’s courts.",
        },
      ],
      namesLabel: "From academy to Grand Slam",
      names: [
        "Yankı Erel",
        "Ergi Kırkın",
        "Berfu Cengiz",
        "Kaan Işık Koşaner",
        "Kuzey Kerem Bayrak",
      ],
      pillars: [
        {
          title: "Investment in youth",
          desc: "We do not measure success by trophies alone. Discipline, work culture, character and belonging are part of the system.",
        },
        {
          title: "A professional bond",
          desc: "Athletes with Grand Slam experience share the same courts and club culture with the next generation.",
        },
        {
          title: "Representing Türkiye",
          desc: "Every successful ATDSK player belongs not only to the club, but to Adana and to Türkiye.",
        },
        {
          title: "International vision",
          desc: "The Vavassori Tennis Academy partnership and global tennis connections open new doors for our athletes.",
        },
      ],
    },
    about: {
      eyebrow: "Tournament",
      title: "A WTA 125",
      titleAccent: "in Adana.",
      body: [
        "Adana Open is a WTA 125 women’s tennis tournament with a total prize purse of USD 115,000, hosted by Adana Tennis, Mountain and Water Sports Club (ATDSK).",
        "Players, teams and visitors from around the world will meet the city — putting Adana on the international tennis calendar.",
        "That is why we see WTA 125 not only as a tennis event, but as a contribution to Adana’s global identity.",
      ],
      facts: [
        { label: "Category", value: "WTA 125" },
        { label: "Prize money", value: "$115,000" },
        { label: "Qualifying", value: "26–27 September" },
        { label: "Main draw", value: "28 September – 4 October" },
        { label: "Final", value: "4 October 2026" },
        { label: "Host", value: "ATDSK" },
      ],
    },
    venue: {
      eyebrow: "Venue",
      title: "Lakeside.",
      titleAccent: "World stage.",
      body: "The tournament is staged at ATDSK’s grounds beside Seyhan Dam Lake. Sixteen courts and full club infrastructure for an international-standard event.",
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
      clubCta: "About the club",
    },
    schedule: {
      eyebrow: "Schedule",
      title: "Nine days.",
      titleAccent: "One champion.",
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
      title: "Beyond",
      titleAccent: "the court.",
      body: "Center court, fan zone, food court, poolside and partner activation spaces.",
      disclaimer:
        "Some visuals are concept studies. Club photos are from ATDSK facilities.",
      areas: [
        {
          title: "Fan Zone",
          desc: "Green-and-white stalls, food and spectator areas.",
          image: "/media/ai/concept-03.jpg",
        },
        {
          title: "Center Court",
          desc: "Main court and protocol stand.",
          image: "/media/hero/venue-overview.jpg",
        },
        {
          title: "Club Courts",
          desc: "ATDSK’s 16-court infrastructure.",
          image: "/media/drone/drone-02.jpg",
        },
        {
          title: "Terrace & Hospitality",
          desc: "Club terrace and guest hospitality.",
          image: "/media/drone/drone-11.jpg",
        },
        {
          title: "Food Court",
          desc: "Food and beverage areas.",
          image: "/media/ai/food-court.jpg",
        },
        {
          title: "Poolside",
          desc: "Poolside seating area.",
          image: "/media/drone/drone-07.jpg",
        },
      ],
    },
    players: {
      eyebrow: "Player list",
      title: "The main draw",
      titleAccent: "is set.",
      lead: "Twenty-three direct acceptances into the main draw are confirmed. Four wildcards, one special exempt and four qualifiers are still to be named.",
      note: "List as of 1 September 2026 from the WTA commitment list. Subject to change until the draw is published.",
      mainLabel: "Main draw · direct acceptances",
      turkeyLabel: "From Türkiye",
      watchLabel: "Names to watch",
      rankLabel: "WTA",
      playsLabel: "Plays",
      ageLabel: "Age",
      wtaCta: "WTA profile",
      right: "Right-handed",
      left: "Left-handed",
    },
    partners: {
      eyebrow: "",
      title: "Partners and sponsors",
      titleAccent: "",
      body: "Names appearing on court-side branding. This list will grow as further agreements are announced.",
      soon: "More partners coming soon.",
      mainLabel: "Title partners",
      restLabel: "Partners",
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk",
      titleAccent: "to us.",
      body: "Write to us for tickets, media and sponsorship. Follow Instagram for announcements.",
      notify: "Get notified",
      emailPlaceholder: "Your email address",
      submit: "Submit",
      submitted: "Thank you — you’re on the list.",
      instagram: "@adana.open",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hostLabel: "Host club",
    },
    tickets: {
      title: "Tickets",
      titleAccent: "",
      body: "Detailed information coming soon.",
    },
    club: {
      metaTitle: "ATDSK | Adana Open",
      metaDescription:
        "Adana Open is hosted by Adana Tennis, Mountain and Water Sports Club. Sixteen courts, a Health Center and a lakeside campus beside Seyhan Dam Lake since 1969.",
      kicker: "Host club",
      title: "Adana Tennis, Mountain and Water",
      titleAccent: "Sports Club",
      lead: "Since 1969, ATDSK has stood beside Seyhan Dam Lake — not only a place to play tennis, but a club that develops players who aim for the world’s courts.",
      body: [
        "The club occupies a 30-dönüm campus on Adnan Menderes Boulevard. In a Turkish Tennis Federation masters survey it was named “Türkiye’s No. 1 club”.",
        "Under president Ali Refah Keskin, in office since 10 January 2016, ATDSK has invested to put Adana on the international tennis calendar. Adana Open WTA 125 is that vision on court.",
        "The pathway from junior tennis to national teams, ITF and WTA, and Grand Slam experience is the shared story of the club’s athletes, coaches and the city.",
      ],
      presidentLabel: "Club president",
      president: "Ali Refah Keskin",
      presidentSince: "In office since 10 January 2016",
      visitLabel: "Visit",
      websiteCta: "atdsk.com",
      mapCta: "Open in Maps",
      tournamentCta: "Back to the tournament",
      facts: [
        { label: "Founded", value: "1969" },
        { label: "Campus", value: "30 dönüm" },
        { label: "Courts", value: "16" },
        { label: "Indoor / hard / clay", value: "2 · 10 · 6" },
        { label: "Health Center", value: "3,000 m²" },
        { label: "Location", value: "Seyhan" },
      ],
      facilitiesLabel: "Thirty dönüm.",
      facilitiesAccent: "Sixteen courts.",
      facilities: [
        {
          title: "16 professional courts",
          desc: "2 indoor hard, 8 outdoor hard and 6 clay courts — 16 in total on a 30-dönüm site.",
        },
        {
          title: "Health Center",
          desc: "3,000 m² indoors: fitness, spa, massage, sauna, an open viewing terrace and a swimming pool.",
        },
        {
          title: "Restaurants and terrace",
          desc: "Three seasonal restaurants plus a terrace restaurant overlooking the lake.",
        },
        {
          title: "Padel court",
          desc: "Padel infrastructure at the club, including athletes who have represented Türkiye.",
        },
        {
          title: "Player rooms",
          desc: "Changing and recovery spaces prepared for national-team players and visiting athletes.",
        },
        {
          title: "Children’s club",
          desc: "Supervised children’s club on Saturdays and Sundays.",
        },
        {
          title: "HPTC tennis school",
          desc: "Limited-intake tennis schools under the High Performance Tennis Center.",
        },
        {
          title: "Outdoor pool",
          desc: "An outdoor swimming pool and seating as part of the Health Center complex.",
        },
      ],
      missionEyebrow: "Mission",
      missionTitle: "What it means",
      missionAccent: "for Turkish tennis.",
      visionTitle: "Brand city",
      visionAccent: "Adana.",
      visionBody:
        "Through the “Brand City Adana” vision, ATDSK aims to make the city a tennis stop between Europe and Asia. The Vavassori Tennis Academy partnership and an Italian development model are part of that path. WTA 125 Adana Open is the same ambition on the professional calendar.",
    },
    footer: {
      rights: "© 2026 Adana Open · adanaopen.com",
      wta: "A WTA 125 tournament · Hosted by ATDSK",
    },
  },
};
