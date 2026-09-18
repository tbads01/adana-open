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
          <Image
            src="/media/partners/sponsor-strip.webp"
            alt={t.partners.title}
            width={2400}
            height={449}
            sizes="100vw"
            quality={75}
            className="mx-auto h-auto w-full max-w-[1400px]"
          />
        </div>
      </Reveal>
    </section>
  );
}
