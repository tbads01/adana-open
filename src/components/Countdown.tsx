"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { TOURNAMENT_END, TOURNAMENT_START } from "@/lib/site";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function diff(from: number, to: number): Parts {
  const ms = Math.max(0, to - from);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const { t } = useLanguage();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const start = Date.parse(TOURNAMENT_START);
  const end = Date.parse(TOURNAMENT_END);
  const remaining = now == null ? null : diff(now, start);
  const live = now != null && now >= start && now < end;
  const ended = now != null && now >= end;

  const units = remaining
    ? [
        { label: t.countdown.days, value: pad(remaining.days) },
        { label: t.countdown.hours, value: pad(remaining.hours) },
        { label: t.countdown.minutes, value: pad(remaining.minutes) },
        { label: t.countdown.seconds, value: pad(remaining.seconds) },
      ]
    : [
        { label: t.countdown.days, value: "––" },
        { label: t.countdown.hours, value: "––" },
        { label: t.countdown.minutes, value: "––" },
        { label: t.countdown.seconds, value: "––" },
      ];

  return (
    <section id="countdown" className="bg-ink text-paper" aria-live="polite">
      <div className="section-pad mx-auto flex max-w-[1200px] flex-col gap-6 py-8 md:flex-row md:items-end md:justify-between md:py-9">
        <div>
          <p className="text-[0.68rem] font-bold tracking-[0.16em] text-yellow uppercase">
            {t.countdown.kicker}
            <span className="mx-2 text-paper/30">·</span>
            {t.hero.date}
          </p>
          <h2 className="mt-2 font-display text-[1.55rem] font-bold tracking-[-0.03em] md:text-[1.85rem]">
            {ended ? t.countdown.ended : live ? t.countdown.live : t.countdown.until}
          </h2>
        </div>
        {ended || live ? null : (
          <div className="grid grid-cols-4 gap-5 md:gap-8">
            {units.map((unit) => (
              <div key={unit.label} className="text-left">
                <p className="font-display text-[clamp(1.7rem,4vw,2.5rem)] leading-none font-extrabold tabular-nums">
                  {unit.value}
                </p>
                <p className="mt-1 text-[0.62rem] font-bold tracking-[0.14em] text-paper/45 uppercase">{unit.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
