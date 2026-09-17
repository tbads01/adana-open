"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

function HeroCopy() {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden bg-paper shadow-[0_18px_50px_rgba(12,22,56,0.18)]">
      <span className="block h-1.5 bg-yellow" />
      <div className="p-6 md:p-7">
        <p className="text-[0.68rem] font-bold tracking-[0.16em] text-ink/50 uppercase">{t.hero.kicker}</p>
        <h1 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.7rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
          {t.hero.headline} {t.hero.headlineAccent}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-[0.95rem]">{t.hero.sub}</p>
        <p className="mt-4 text-sm font-semibold text-ink">
          {t.hero.date}
          <span className="mx-2 font-normal text-ink/30">·</span>
          {t.hero.place}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href={ROUTES.program} className="btn btn-primary">
            {t.nav.schedule}
          </Link>
          <Link href={ROUTES.iletisim} className="btn btn-ghost">
            {t.hero.ctaTickets}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="relative min-h-[62vh] overflow-hidden md:min-h-[78vh]">
        <Image
          src="/media/hero/venue-overview.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[58%_30%]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 top-[4.5rem] w-[min(52%,400px)] sm:w-[min(46%,430px)]">
          <Image
            src="/media/brand/kaplan.webp"
            alt=""
            fill
            priority
            className="object-contain object-left-bottom"
            sizes="460px"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 hidden lg:block">
          <div className="mx-auto flex max-w-[1200px] justify-end px-8 pb-8">
            <div className="w-full max-w-[28.5rem]">
              <HeroCopy />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <HeroCopy />
      </div>
    </section>
  );
}
