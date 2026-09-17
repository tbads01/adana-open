"use client";

import { useLanguage } from "@/lib/i18n";

export function HomeFacts() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line-dark bg-paper">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {t.about.facts.map((fact) => (
          <div
            key={fact.label}
            className="border-r border-b border-line-dark px-4 py-5 last:border-r-0 sm:px-5 lg:border-b-0"
          >
            <p className="text-[0.62rem] font-bold tracking-[0.14em] text-ink/40 uppercase">{fact.label}</p>
            <p className="mt-1.5 font-display text-[1.15rem] font-extrabold tracking-[-0.03em] text-ink">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
