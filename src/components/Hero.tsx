"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-void">
      <div className="absolute inset-0">
        <Image
          src="/media/hero/venue-overview.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[62%_28%] scale-[1.04]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/55 to-void/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/35" />
        <div className="brand-stripes absolute inset-y-0 right-0 w-[min(52vw,560px)] opacity-50 max-lg:w-[70%] lg:opacity-80" />
      </div>

      <div className="pointer-events-none absolute z-[1] max-lg:right-[-10%] max-lg:bottom-[4.75rem] max-lg:h-[46%] max-lg:w-[78%] lg:inset-y-8 lg:right-[-6%] lg:w-[min(58vw,620px)]">
        <Image
          src="/media/brand/kaplan.webp"
          alt=""
          fill
          priority
          className="object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
          sizes="(max-width:1024px) 78vw, 620px"
        />
      </div>

      <div className="section-pad relative z-[2] mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center pb-36 pt-28">
        <div className="max-w-[20rem] sm:max-w-[28rem] lg:max-w-[38rem]">
          <p className="animate-rise inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.22em] text-yellow uppercase">
            <span className="h-px w-8 bg-yellow" />
            {t.hero.kicker}
          </p>
          <h1 className="animate-rise-delay-1 mt-6 font-display text-[clamp(3rem,7.2vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.045em] text-white">
            {t.hero.headline}
            <span className="mt-1 block font-semibold text-yellow">{t.hero.headlineAccent}</span>
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-md text-[1.05rem] leading-relaxed text-white/80">
            {t.hero.sub}
          </p>
          <div className="animate-rise-delay-2 mt-9 flex flex-wrap gap-3">
            <Link href="/atdsk" className="btn btn-primary">
              {t.hero.ctaExplore}
            </Link>
            <a href="#players" className="btn btn-ghost-light">
              {t.nav.players}
            </a>
            <a href="#tickets" className="btn btn-ghost-light">
              {t.hero.ctaTickets}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[2] border-t border-yellow/25 bg-void/70 backdrop-blur-xl">
        <div className="section-pad mx-auto grid max-w-[1400px] gap-5 py-5 sm:grid-cols-3 sm:gap-8">
          {[
            { label: t.hero.dateLabel, value: t.hero.date },
            { label: t.venue.eyebrow, value: t.hero.place },
            { label: "WTA 125", value: "$115,000" },
          ].map((item) => (
            <div key={item.label} className="min-w-0">
              <p className="text-[0.62rem] tracking-[0.2em] text-yellow/80 uppercase">
                {item.label}
              </p>
              <p className="mt-1 truncate font-display text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
