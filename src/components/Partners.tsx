"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const MAINS: Logo[] = [
  {
    src: "/media/partners/bulutlar.png?v=2",
    alt: "Bulutlar Kuruyemiş",
    width: 1819,
    height: 628,
    className: "h-11 max-w-[10.5rem] sm:h-14 sm:max-w-[13rem] md:h-16 md:max-w-[15.5rem]",
  },
  {
    src: "/media/partners/adana-buyuksehir.png?v=2",
    alt: "Adana Büyükşehir Belediyesi",
    width: 1684,
    height: 1032,
    className: "h-14 max-w-[9.5rem] sm:h-16 sm:max-w-[12rem] md:h-[4.75rem] md:max-w-[14rem]",
  },
  {
    src: "/media/partners/atdsk-seal.png?v=3",
    alt: "ATDSK",
    width: 698,
    height: 706,
    className: "h-16 sm:h-[4.5rem] md:h-[5.25rem]",
  },
];

const REST: Logo[] = [
  {
    src: "/media/partners/qnb.png?v=3",
    alt: "QNB",
    width: 840,
    height: 246,
    className: "h-6 max-w-[4.75rem] sm:h-7 sm:max-w-[6rem] md:h-8 md:max-w-[6.75rem]",
  },
  {
    src: "/media/partners/agrivolt.png?v=3",
    alt: "Agrivolt",
    width: 450,
    height: 295,
    className: "h-10 sm:h-11",
  },
  {
    src: "/media/partners/acibadem-adana.png?v=3",
    alt: "Acıbadem Adana",
    width: 1270,
    height: 219,
    className: "h-6 max-w-[5.75rem] sm:h-7 sm:max-w-[7rem] md:h-8 md:max-w-[8rem]",
  },
  {
    src: "/media/partners/lexus-seyhan.png?v=2",
    alt: "Lexus Seyhan",
    width: 1209,
    height: 562,
    className: "h-8 max-w-[5.25rem] sm:h-9 sm:max-w-[6.25rem] md:h-10 md:max-w-[6.75rem]",
  },
  {
    src: "/media/partners/zuber.png?v=2",
    alt: "Züber",
    width: 817,
    height: 333,
    className: "h-6 max-w-[4.25rem] sm:h-8 sm:max-w-[5.25rem] md:h-9 md:max-w-[5.75rem]",
  },
  {
    src: "/media/partners/keskin.png?v=3",
    alt: "Keskin İnşaat",
    width: 600,
    height: 687,
    className: "h-10 max-w-[5.25rem] sm:h-11 sm:max-w-[6.25rem]",
  },
  {
    src: "/media/partners/sheraton.png?v=3",
    alt: "Sheraton Grand Adana",
    width: 291,
    height: 228,
    className: "h-11 sm:h-12",
  },
  {
    src: "/media/partners/ezc.png?v=3",
    alt: "EZC Organizasyon",
    width: 310,
    height: 175,
    className: "h-7 max-w-[4.5rem] sm:h-8 sm:max-w-[5.5rem] md:h-9 md:max-w-[6rem]",
  },
  {
    src: "/media/partners/gsb-mark.png?v=2",
    alt: "T.C. Gençlik ve Spor Bakanlığı",
    width: 569,
    height: 594,
    className: "h-11 sm:h-12",
  },
  {
    src: "/media/partners/ttf.png?v=2",
    alt: "Türkiye Tenis Federasyonu",
    width: 684,
    height: 503,
    className: "h-10 sm:h-11",
  },
];

function LogoMark({ logo }: { logo: Logo }) {
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      unoptimized
      className={`w-auto object-contain object-center ${logo.className}`}
    />
  );
}

export function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-paper py-16 text-ink md:py-20">
      <div className="section-pad mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading tone="dark" title={t.partners.title} />
            <p className="mt-5 text-base leading-relaxed text-ink/65">{t.partners.body}</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="relative mt-10 overflow-hidden bg-ink text-paper">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-6 px-5 pt-9 pb-2 sm:gap-x-8 sm:px-10 sm:pt-11 md:gap-x-10 md:px-12 md:pt-12">
              {MAINS.map((logo, i) => (
                <div key={logo.alt} className="flex items-center gap-5 sm:gap-8 md:gap-10">
                  {i > 0 ? <span className="h-12 w-px bg-white/25 md:h-16" aria-hidden /> : null}
                  <div className="flex h-[4.5rem] items-center justify-center sm:h-20">
                    <LogoMark logo={logo} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-6 border-t border-white/10 sm:mx-10 md:mx-14" />

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-6 px-5 py-8 sm:gap-x-6 sm:px-10 md:gap-x-7 md:px-8 md:py-10">
              {REST.map((logo) => (
                <div key={logo.alt} className="flex h-12 items-center justify-center">
                  <LogoMark logo={logo} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
