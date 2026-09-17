"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { NAV_LINKS } from "@/lib/routes";

export function HomeExplore() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-white/8 bg-ink py-16 md:py-20">
      <div className="section-pad mx-auto max-w-[1400px]">
        <div className="grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-baseline justify-between border-b border-white/10 py-4 font-display text-[1.85rem] font-semibold tracking-[-0.03em] text-paper transition hover:text-yellow md:text-[2.15rem]"
            >
              {t.nav[link.key]}
              <span className="text-lg text-yellow opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
