"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-paper py-14 text-ink md:py-16">
      <div className="section-pad mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading tone="dark" title={t.partners.title} />
            <p className="mt-5 text-base leading-relaxed text-ink/65">{t.partners.body}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={60}>
        <div className="mt-10 bg-ink">
          <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <Image
              src="/media/partners/sponsors.webp"
              alt={t.partners.title}
              width={1211}
              height={402}
              sizes="(max-width:1200px) 100vw, 1200px"
              quality={75}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
