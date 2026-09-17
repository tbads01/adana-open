"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto grid max-w-[1180px] lg:grid-cols-[minmax(0,0.92fr)_1.08fr]">
        <div className="section-pad flex flex-col justify-center py-16 md:py-24 lg:py-28">
          <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink/45 uppercase">
            {t.hero.kicker}
          </p>
          <h1 className="mt-5 max-w-lg font-display text-[clamp(2.4rem,5vw,4.35rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
            {t.hero.headline}{" "}
            <em className="font-normal">{t.hero.headlineAccent}</em>
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/65">
            {t.hero.sub}
          </p>
          <p className="mt-6 text-sm tracking-wide text-ink/45">
            {t.hero.date}
            <span className="mx-2 text-ink/20">·</span>
            {t.hero.place}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href={ROUTES.program} className="btn btn-primary whitespace-nowrap">
              {t.nav.schedule}
            </Link>
            <Link
              href={ROUTES.iletisim}
              className="text-sm text-ink/70 underline decoration-ink/20 underline-offset-4 hover:text-ink"
            >
              {t.hero.ctaTickets}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[56vh] lg:min-h-[82vh]">
          <Image
            src="/media/hero/venue-overview.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[62%_28%]"
            sizes="(max-width:1024px) 100vw, 54vw"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[min(58%,280px)] sm:w-[min(48%,340px)]">
            <Image
              src="/media/brand/kaplan.webp"
              alt=""
              fill
              priority
              className="object-contain object-bottom"
              sizes="340px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
