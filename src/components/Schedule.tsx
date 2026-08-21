"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Schedule() {
  const { t } = useLanguage();

  return (
    <section id="schedule" className="relative bg-paper py-24 md:py-32">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <p className="eyebrow">{t.schedule.eyebrow}</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              {t.schedule.title}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {t.schedule.note}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {t.schedule.days.map((day, index) => (
            <Reveal key={day.date} delay={index * 40}>
              <div className="grid gap-3 py-6 md:grid-cols-[0.9fr_0.9fr_1.4fr] md:items-center md:gap-8">
                <p className="font-display text-xl font-semibold tracking-tight text-green-deep md:text-2xl">
                  {day.date}
                </p>
                <p className="text-sm tracking-[0.12em] text-muted uppercase">
                  {day.day}
                </p>
                <p className="text-base text-ink-soft/85 md:text-lg">{day.items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
