"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

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
      <div className="section-pad mx-auto flex max-w-[1400px] flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-clear.png"
            alt="Adana Open"
            width={140}
            height={112}
            className="h-14 w-auto"
          />
          <div>
            <p className="text-sm text-paper/70">{t.footer.wta}</p>
            <p className="mt-1 text-xs text-paper/40">{t.footer.rights}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-paper/55">
          <Link href="/atdsk" className="hover:text-yellow">
            ATDSK
          </Link>
          <a href="https://www.instagram.com/adana.open/" target="_blank" rel="noreferrer" className="hover:text-yellow">
            Instagram
          </a>
          <a href="mailto:info@adanaopen.com" className="hover:text-yellow">
            info@adanaopen.com
          </a>
        </div>
      </div>
    </footer>
  );
}
