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

const mains: Logo[] = [
  {
    src: "/media/partners/adana-buyuksehir.png",
    alt: "Adana Büyükşehir Belediyesi",
    width: 1684,
    height: 1032,
    className: "h-14 max-w-[11rem] sm:h-16 sm:max-w-[13rem] md:h-[4.75rem] md:max-w-[14.5rem]",
  },
  {
    src: "/media/partners/bulutlar.png",
    alt: "Bulutlar Kuruyemiş",
    width: 1819,
    height: 628,
    className: "h-11 max-w-[12rem] sm:h-14 sm:max-w-[14rem] md:h-16 md:max-w-[15.5rem]",
  },
];

const rest: Logo[] = [
  {
    src: "/media/partners/acibadem.png",
    alt: "Acıbadem",
    width: 1726,
    height: 226,
    className: "h-4 max-w-[5.25rem] sm:h-5 sm:max-w-[7.5rem] md:h-6 md:max-w-[8.5rem]",
  },
  {
    src: "/media/partners/lexus-seyhan.png",
    alt: "Lexus Seyhan",
    width: 1209,
    height: 562,
    className: "h-7 max-w-[4.75rem] sm:h-9 sm:max-w-[6.25rem] md:h-10 md:max-w-[6.75rem]",
  },
  {
    src: "/media/partners/zuber.png",
    alt: "Züber",
    width: 817,
    height: 333,
    className: "h-6 max-w-[4.25rem] sm:h-8 sm:max-w-[5.25rem] md:h-9 md:max-w-[5.75rem]",
  },
  {
    src: "/media/partners/gsb-mark.png",
    alt: "T.C. Gençlik ve Spor Bakanlığı",
    width: 569,
    height: 594,
    className: "h-10 sm:h-11",
  },
  {
    src: "/media/partners/ttf.png",
    alt: "Türkiye Tenis Federasyonu",
    width: 684,
    height: 503,
    className: "h-10 sm:h-11",
  },
];

function LogoMark({ logo, priority = false }: { logo: Logo; priority?: boolean }) {
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      unoptimized
      className={`w-auto object-contain object-center ${logo.className}`}
    />
  );
}

export function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-paper py-24 text-ink md:py-32">
      <div className="section-pad mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading tone="dark" title={t.partners.title} />
            <p className="mt-5 text-base leading-relaxed text-ink/65">{t.partners.body}</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="relative mt-10 overflow-hidden rounded-2xl bg-ink text-paper">
            <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 px-6 py-10 sm:gap-x-20 sm:px-12 sm:py-12 md:gap-x-24">
              {mains.map((logo) => (
                <div key={logo.alt} className="flex h-[4.75rem] items-center justify-center sm:h-20">
                  <LogoMark logo={logo} priority />
                </div>
              ))}
            </div>

            <div className="mx-10 border-t border-white/10 sm:mx-14 md:mx-16" />

            <div className="mx-auto grid max-w-3xl grid-cols-6 place-items-center gap-x-3 gap-y-7 px-5 py-9 sm:max-w-4xl sm:gap-x-6 sm:px-10 md:grid-cols-5 md:px-8 md:py-10">
              {rest.map((logo, i) => (
                <div
                  key={logo.alt}
                  className={`flex h-11 w-full items-center justify-center sm:h-12 ${
                    i < 3 ? "col-span-2 md:col-span-1" : "col-span-3 md:col-span-1"
                  }`}
                >
                  <LogoMark logo={logo} />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-ink/45">{t.partners.soon}</p>
        </Reveal>
      </div>
    </section>
  );
}
