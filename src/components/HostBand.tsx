"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function HostBand() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink">
      <Link
        href="/atdsk"
        className="section-pad mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-12"
      >
        <div className="flex items-center gap-4">
          <Image
            src="/media/brand/atdsk-mark.png"
            alt="ATDSK"
            width={56}
            height={56}
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
          <div>
            <p className="text-[0.62rem] tracking-[0.18em] text-yellow uppercase">
              {t.contact.hostLabel}
            </p>
            <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.03em] text-paper md:text-4xl">{t.venue.host}</p>
          </div>
        </div>
        <span className="btn btn-primary">{t.venue.clubCta}</span>
      </Link>
    </section>
  );
}
