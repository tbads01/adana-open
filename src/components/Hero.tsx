"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-paper"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-court.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[62%_45%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/82 to-paper/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/45" />
      </div>

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end pb-14 pt-28 md:pb-20 md:pt-32">
        <div className="max-w-2xl">
          <p className="animate-rise eyebrow">{t.hero.kicker}</p>

          <div className="animate-rise-delay-1 mt-6 flex flex-wrap items-end gap-x-5 gap-y-2">
            <Image
              src="/logo.png"
              alt="adana open"
              width={320}
              height={255}
              className="h-[4.6rem] w-auto sm:h-[6rem]"
              priority
            />
            <span className="mb-2 hidden h-14 w-px bg-line sm:block" />
            <span className="mb-2.5 font-display text-sm font-semibold tracking-[0.28em] text-ink-soft/65 uppercase">
              WTA 125
            </span>
          </div>

          <h1 className="animate-rise-delay-2 mt-7 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-ink">
            {t.hero.headline}
          </h1>

          <p className="animate-rise-delay-3 mt-5 max-w-xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
            {t.hero.sub}
          </p>

          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <a href="#about" className="btn btn-primary">
              {t.hero.ctaExplore}
            </a>
            <a href="#tickets" className="btn btn-ghost">
              {t.hero.ctaTickets}
            </a>
            <a href="#partners" className="btn btn-ghost">
              {t.hero.ctaPartners}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.hero.ctaNotify}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6 text-sm">
          <div>
            <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
              {t.hero.dateLabel}
            </p>
            <p className="mt-1 font-medium text-ink">{t.hero.date}</p>
          </div>
          <div>
            <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
              {t.venue.eyebrow}
            </p>
            <p className="mt-1 font-medium text-ink">{t.hero.place}</p>
          </div>
          <div>
            <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
              Domain
            </p>
            <p className="mt-1 font-medium text-green-deep">adanaopen.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
