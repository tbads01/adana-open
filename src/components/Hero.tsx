"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

export function Hero() {
  const { t } = useLanguage();
  const facts = [
    t.about.facts[0],
    t.about.facts[1],
    { label: t.hero.dateLabel, value: t.hero.date },
    t.about.facts[5],
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  return (
    <section id="top" className="relative isolate overflow-hidden bg-void">
      <div className="relative min-h-[88svh]">
        <div className="absolute inset-0">
          <Image
            src="/media/hero/venue-overview.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[62%_28%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-void/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/40" />
        </div>

        <div className="pointer-events-none absolute right-[-8%] bottom-0 z-[1] hidden h-[78%] w-[min(42vw,420px)] lg:block">
          <Image
            src="/media/brand/kaplan.webp"
            alt=""
            fill
            priority
            className="object-contain object-bottom opacity-90"
            sizes="420px"
          />
        </div>

        <div className="section-pad relative z-[2] mx-auto flex min-h-[88svh] max-w-[1200px] flex-col justify-center pb-28 pt-24">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-bold tracking-[0.2em] text-yellow uppercase">
              {t.hero.kicker}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.96] tracking-[-0.045em] text-white">
              {t.hero.headline}
              <span className="mt-1 block font-semibold text-yellow">{t.hero.headlineAccent}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
              {t.hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={ROUTES.program} className="btn btn-primary">
                {t.nav.schedule}
              </Link>
              <Link href={ROUTES.iletisim} className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-yellow hover:underline">
                {t.hero.ctaTickets}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[3] border-t border-white/10 bg-ink">
        <div className="section-pad mx-auto grid max-w-[1200px] grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
          {facts.map((fact) => (
            <div key={fact.label} className="px-4 py-5 md:px-6 md:py-6 first:pl-0 max-md:odd:pl-0">
              <p className="text-[0.62rem] tracking-[0.16em] text-white/40 uppercase">{fact.label}</p>
              <p className="mt-1.5 font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-paper md:text-lg">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
