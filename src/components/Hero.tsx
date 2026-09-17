"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

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

      <div className="pointer-events-none absolute z-[1] max-lg:right-[-10%] max-lg:bottom-8 max-lg:h-[50%] max-lg:w-[78%] lg:inset-y-8 lg:right-[-6%] lg:w-[min(58vw,620px)]">
        <Image
          src="/media/brand/kaplan.webp"
          alt=""
          fill
          priority
          className="object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
          sizes="(max-width:1024px) 78vw, 620px"
        />
      </div>

      <div className="section-pad relative z-[2] mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center pb-16 pt-24">
        <div className="max-w-[20rem] sm:max-w-[28rem] lg:max-w-[38rem]">
          <p className="animate-rise inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.22em] text-yellow uppercase">
            <span className="h-px w-8 bg-yellow" />
            {t.hero.kicker}
          </p>
          <h1 className="animate-rise-delay-1 mt-5 font-display text-[clamp(2.8rem,6.8vw,5.4rem)] font-bold leading-[0.94] tracking-[-0.045em] text-white">
            {t.hero.headline}
            <span className="mt-1 block font-semibold text-yellow">{t.hero.headlineAccent}</span>
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-[1.02rem] leading-relaxed text-white/80">
            {t.hero.sub}
          </p>
          <div className="animate-rise-delay-2 mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.82rem] font-semibold tracking-wide text-white/70">
            <span>{t.hero.date}</span>
            <span className="text-yellow/80">·</span>
            <span>{t.hero.place}</span>
          </div>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href={ROUTES.program} className="btn btn-primary">
              {t.nav.schedule}
            </Link>
            <Link href={ROUTES.oyuncular} className="btn btn-ghost-light">
              {t.nav.players}
            </Link>
            <Link href={ROUTES.iletisim} className="btn btn-ghost-light">
              {t.hero.ctaTickets}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
