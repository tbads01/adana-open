"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { NAV_LINKS, ROUTES } from "@/lib/routes";
import { INSTAGRAM, SITE_EMAIL, WTA_URL } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper">
      <div className="h-1 bg-yellow" />
      <div className="section-pad mx-auto max-w-[1200px] py-14 md:py-16">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Image src="/logo-clear.png" alt="Adana Open" width={140} height={112} sizes="140px" quality={75} className="h-12 w-auto" />
            <p className="mt-4 max-w-md font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl">
              {t.hero.headline} {t.hero.headlineAccent}
            </p>
            <p className="mt-3 text-sm text-paper/60">{t.footer.wta}</p>
            <p className="mt-2 text-sm font-semibold text-paper/80">
              {t.hero.date}
              <span className="mx-2 font-normal text-paper/30">·</span>
              {t.hero.place}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={ROUTES.program} className="btn btn-primary">
              {t.nav.schedule}
            </Link>
            <Link href={ROUTES.iletisim} className="btn btn-ghost-light">
              {t.nav.tickets}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label={t.ui.explore}>
            <p className="text-[0.68rem] font-bold tracking-[0.14em] text-yellow uppercase">{t.ui.explore}</p>
            <div className="mt-4 grid gap-2 text-sm text-paper/70">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-paper">
                  {t.nav[link.key]}
                </Link>
              ))}
              <Link href={ROUTES.mekan} className="hover:text-paper">
                {t.nav.venue}
              </Link>
            </div>
          </nav>
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.14em] text-yellow uppercase">{t.nav.contact}</p>
            <div className="mt-4 grid gap-2 text-sm text-paper/70">
              <a href={`mailto:${SITE_EMAIL}`} className="hover:text-paper">
                {SITE_EMAIL}
              </a>
              <a href="tel:+903222341155" className="hover:text-paper">
                +90 322 234 11 55
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-paper">
                Instagram
              </a>
            </div>
          </div>
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.14em] text-yellow uppercase">{t.nav.atdsk}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">{t.venue.host}</p>
            <Link href={ROUTES.atdsk} className="mt-3 inline-block text-sm font-semibold text-paper hover:text-yellow">
              {t.venue.clubCta} →
            </Link>
          </div>
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.14em] text-yellow uppercase">WTA</p>
            <a
              href={WTA_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm leading-relaxed text-paper/70 hover:text-paper"
            >
              wtatennis.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-pad mx-auto flex max-w-[1200px] flex-col gap-2 py-4 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <p>{t.hero.kicker}</p>
        </div>
      </div>
    </footer>
  );
}
