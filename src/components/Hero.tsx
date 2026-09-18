"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative min-h-[70vh] overflow-hidden bg-ink md:min-h-[86vh]">
      <Image
        src="/media/hero/adana-open-court.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={75}
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25 md:via-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/25" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-[55%] w-[58%] sm:inset-y-0 sm:h-auto sm:w-[min(50%,560px)]">
        <Image
          src="/media/brand/kaplan.webp"
          alt=""
          fill
          className="object-contain object-right-bottom"
          sizes="(max-width:640px) 220px, 560px"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1200px] items-end px-4 pb-10 pt-24 md:min-h-[86vh] md:px-8 md:pb-14">
        <div className="max-w-[17.5rem] text-paper sm:max-w-xl">
          <p className="text-[0.68rem] font-bold tracking-[0.18em] text-yellow uppercase">{t.hero.kicker}</p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,5.4vw,4.1rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            {t.hero.headline}
            <span className="block">{t.hero.headlineAccent}</span>
          </h1>
          <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-paper/80">{t.hero.sub}</p>
          <p className="mt-5 text-sm font-semibold text-paper/90">
            {t.hero.date}
            <span className="mx-2 font-normal text-paper/35">·</span>
            {t.hero.place}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={ROUTES.program} className="btn btn-primary">
              {t.nav.schedule}
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
