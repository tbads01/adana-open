"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="section-pad mx-auto flex max-w-[1280px] flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-nav.png"
            alt="Adana Open"
            width={110}
            height={88}
            className="h-10 w-auto"
          />
          <div>
            <p className="text-sm text-ink-soft/80">{t.footer.wta}</p>
            <p className="mt-1 text-xs text-muted">{t.footer.rights}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-ink-soft/70">
          <a
            href="https://www.instagram.com/adana.open/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-deep"
          >
            Instagram
          </a>
          <a href="mailto:info@adanaopen.com" className="hover:text-green-deep">
            info@adanaopen.com
          </a>
          <a
            href="https://atdsk.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-deep"
          >
            ATDSK
          </a>
          <a
            href="https://www.wtatennis.com/tournaments/wta-125"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-deep"
          >
            WTA 125
          </a>
        </div>
      </div>
    </footer>
  );
}
