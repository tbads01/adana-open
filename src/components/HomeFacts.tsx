"use client";

import { useLanguage } from "@/lib/i18n";

export function HomeFacts() {
  const { t } = useLanguage();
  const facts = [
    t.about.facts[0],
    t.about.facts[1],
    { label: t.hero.dateLabel, value: t.hero.date },
    t.about.facts[5],
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  return (
    <section className="border-y border-white/8 bg-ink">
      <div className="section-pad mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-white/8 px-0 py-5 max-md:odd:pr-4 max-md:even:border-l max-md:even:pl-4 md:border-l md:px-6 md:py-6 first:md:border-l-0 first:md:pl-0"
            >
              <p className="text-[0.62rem] tracking-[0.16em] text-white/40 uppercase">{fact.label}</p>
              <p className="mt-2 font-display text-lg font-semibold tracking-[-0.03em] text-paper md:text-xl">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
