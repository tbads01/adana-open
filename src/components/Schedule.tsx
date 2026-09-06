"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Schedule() {
  const { t } = useLanguage();

  return (
    <section id="schedule" className="bg-paper py-24 text-ink md:py-32">
      <div className="section-pad mx-auto max-w-[1100px]">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow={t.schedule.eyebrow}
            title={t.schedule.title}
            accent={t.schedule.titleAccent}
          />
          <p className="mt-3 max-w-lg text-sm text-ink/50">{t.schedule.note}</p>
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute top-3 bottom-3 left-[7px] w-px bg-ink/10 md:left-[9px]" />
          <div className="space-y-8">
            {t.schedule.days.map((day, i) => (
              <Reveal key={day.date} delay={i * 50}>
                <div className="grid gap-2 pl-8 md:grid-cols-[220px_1fr] md:items-baseline md:gap-10 md:pl-10">
                  <div className="relative">
                    <span className="absolute top-2 -left-8 h-2.5 w-2.5 rounded-full bg-yellow ring-4 ring-paper md:-left-10" />
                    <p className="font-serif text-2xl text-ink">{day.date}</p>
                    <p className="mt-1 text-[0.68rem] tracking-[0.16em] text-ink/40 uppercase">
                      {day.day}
                    </p>
                  </div>
                  <p className="text-lg text-ink/80">{day.items}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
