"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { MORE_LINKS, NAV_LINKS, ROUTES } from "@/lib/routes";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink">
      <div className="pointer-events-none absolute right-3 bottom-0 h-20 w-16 opacity-40 md:right-4 md:h-28 md:w-24">
        <Image
          src="/media/brand/kaplan-bust.webp"
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="96px"
        />
      </div>
      <div className="section-pad relative mx-auto grid max-w-[1400px] gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-14">
        <div className="md:col-span-5">
          <Image
            src="/logo-clear.png"
            alt="Adana Open"
            width={140}
            height={112}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65">{t.footer.wta}</p>
          <p className="mt-3 text-xs text-paper/40">{t.footer.rights}</p>
        </div>

        <nav className="md:col-span-3" aria-label={t.ui.explore}>
          <p className="text-[0.62rem] font-bold tracking-[0.18em] text-yellow uppercase">
            {t.ui.explore}
          </p>
          <div className="mt-4 grid gap-2.5 text-sm text-paper/70">
            <Link href={ROUTES.home} className="hover:text-yellow">
              {t.ui.home}
            </Link>
            {[...NAV_LINKS, ...MORE_LINKS].map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-yellow">
                {t.nav[link.key]}
              </Link>
            ))}
            <Link href={ROUTES.iletisim} className="hover:text-yellow">
              {t.nav.contact}
            </Link>
          </div>
        </nav>

        <div className="md:col-span-4">
          <p className="text-[0.62rem] font-bold tracking-[0.18em] text-yellow uppercase">
            {t.nav.contact}
          </p>
          <div className="mt-4 grid gap-2.5 text-sm text-paper/70">
            <a href="mailto:info@adanaopen.com" className="hover:text-yellow">
              info@adanaopen.com
            </a>
            <a
              href="https://www.instagram.com/adana.open/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow"
            >
              Instagram
            </a>
            <a href="tel:+903222341155" className="hover:text-yellow">
              +90 322 234 11 55
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
