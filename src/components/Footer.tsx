"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { MORE_LINKS, NAV_LINKS, ROUTES } from "@/lib/routes";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line-dark bg-paper-soft">
      <div className="section-pad mx-auto grid max-w-[1200px] gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/logo-clear.png" alt="Adana Open" width={140} height={112} className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">{t.footer.wta}</p>
          <p className="mt-3 text-xs text-ink/40">{t.footer.rights}</p>
        </div>
        <nav className="md:col-span-3" aria-label={t.ui.explore}>
          <p className="text-[0.68rem] font-bold tracking-[0.14em] text-ink/40 uppercase">{t.ui.explore}</p>
          <div className="mt-4 grid gap-2 text-sm text-ink/70">
            <Link href={ROUTES.home} className="hover:text-ink">
              {t.ui.home}
            </Link>
            {[...NAV_LINKS, ...MORE_LINKS].map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink">
                {t.nav[link.key]}
              </Link>
            ))}
            <Link href={ROUTES.iletisim} className="hover:text-ink">
              {t.nav.contact}
            </Link>
          </div>
        </nav>
        <div className="md:col-span-4">
          <p className="text-[0.68rem] font-bold tracking-[0.14em] text-ink/40 uppercase">{t.nav.contact}</p>
          <div className="mt-4 grid gap-2 text-sm text-ink/70">
            <a href="mailto:info@adanaopen.com" className="hover:text-ink">
              info@adanaopen.com
            </a>
            <a href="https://www.instagram.com/adana.open/" target="_blank" rel="noreferrer" className="hover:text-ink">
              Instagram
            </a>
            <a href="tel:+903222341155" className="hover:text-ink">
              +90 322 234 11 55
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
