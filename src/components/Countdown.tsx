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
        { label: t.countdown.days, value: pad(remaining.days), pulse: false },
        { label: t.countdown.hours, value: pad(remaining.hours), pulse: false },
        { label: t.countdown.minutes, value: pad(remaining.minutes), pulse: false },
        { label: t.countdown.seconds, value: pad(remaining.seconds), pulse: true },
      ]
    : [
        { label: t.countdown.days, value: "––", pulse: false },
        { label: t.countdown.hours, value: "––", pulse: false },
        { label: t.countdown.minutes, value: "––", pulse: false },
        { label: t.countdown.seconds, value: "––", pulse: false },
      ];

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-yellow text-ink"
      aria-live="polite"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] opacity-40">
        <div className="brand-stripes h-full w-full" />
      </div>
      <div className="section-pad relative mx-auto max-w-[1400px] py-7 md:py-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase">
              {t.countdown.kicker}
              <span className="mx-2 text-ink/30">·</span>
              {t.hero.date}
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold tracking-[-0.04em]">
              {ended ? t.countdown.ended : live ? t.countdown.live : t.countdown.until}
            </h2>
          </div>

          {ended || live ? null : (
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {units.map((unit) => (
                <div
                  key={unit.label}
                  className="min-w-[4.25rem] rounded-2xl bg-ink px-2 py-3 text-center sm:min-w-[5.5rem] sm:px-3 sm:py-4 md:min-w-[6.5rem]"
                >
                  <p
                    className={`font-display text-[clamp(1.85rem,6vw,3.6rem)] leading-none font-bold tracking-[-0.06em] text-yellow tabular-nums ${
                      unit.pulse ? "count-seconds" : ""
                    }`}
                  >
                    {unit.value}
                  </p>
                  <p className="mt-2 text-[0.58rem] font-bold tracking-[0.16em] text-yellow/70 uppercase">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
