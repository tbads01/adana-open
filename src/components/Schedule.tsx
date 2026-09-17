"use client";

import { useLanguage } from "@/lib/i18n";
import { MATCH_PLAN, roundKind, uniqueRounds, type MatchRound } from "@/lib/match-plan";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CAPS = [
  "bg-yellow",
  "bg-green",
  "bg-blue",
  "bg-ink",
  "bg-yellow",
  "bg-green",
  "bg-ink",
  "bg-yellow",
  "bg-blue",
] as const;

const TAG_DOT: Record<"match" | "music" | "event", string> = {
  match: "bg-yellow",
  music: "bg-blue",
  event: "bg-green",
};

const ROUND_CHIP: Record<"qual" | "singles" | "doubles", string> = {
  qual: "bg-green text-white",
  singles: "bg-yellow text-ink",
  doubles: "bg-blue text-white",
};

const COURT_COLS: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

export function Schedule({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t } = useLanguage();
  const s = t.schedule;

  return (
    <section id="schedule" className={`bg-paper text-ink ${hideIntro ? "py-14 md:py-16" : "py-24 md:py-32"}`}>
      <div className="section-pad mx-auto max-w-[1400px]">
        {hideIntro ? null : (
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={s.eyebrow}
              title={s.title}
              accent={s.titleAccent}
            />
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/50">{s.note}</p>
          </Reveal>
        )}

        <div className={`relative -mx-2 ${hideIntro ? "mt-0" : "mt-10"}`}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-paper to-transparent md:w-4" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-paper to-transparent md:w-4" />
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {s.days.map((day, i) => (
              <article
                key={`${day.date}-${day.stage}`}
                className="flex min-h-[30.5rem] w-[min(78vw,16.5rem)] shrink-0 snap-start flex-col overflow-hidden rounded-[0.85rem] bg-white shadow-[0_18px_40px_rgba(26,39,81,0.08)]"
              >
                <span className={`h-1.5 w-full ${CAPS[i] ?? "bg-yellow"}`} />
                <div className="flex flex-1 flex-col px-5 pt-5 pb-6">
                  <p className="text-[0.62rem] font-bold tracking-[0.16em] text-ink/40 uppercase">
                    {day.date}
                    <span className="mx-1.5 text-ink/20">·</span>
                    {day.weekday}
                  </p>
                  <h3 className="mt-2 font-display text-[1.35rem] leading-tight font-bold tracking-[-0.04em] text-ink">
                    {day.stage}
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {day.events.map((event) => (
                      <li key={`${event.time}-${event.title}`} className="flex gap-3">
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${TAG_DOT[event.tag]}`}
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <p className="text-[0.62rem] font-bold tracking-[0.12em] text-ink/40 tabular-nums">
                            {event.time}
                          </p>
                          <p className="mt-0.5 text-[0.92rem] leading-snug font-medium text-ink/85">
                            {event.title}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <div id="match-plan" className="overflow-hidden rounded-[0.85rem] bg-ink text-paper">
            <div className="px-5 py-8 sm:px-8 md:px-10 md:py-12">
              <p className="eyebrow">{s.matchEyebrow}</p>
              <h3 className="section-title mt-4 text-[clamp(2rem,4.2vw,3.4rem)] text-paper">
                {s.matchTitle}
                <span className="section-accent">{s.matchAccent}</span>
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/55">{s.matchNote}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-[0.68rem] font-bold tracking-[0.12em] uppercase">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green" aria-hidden />
                  {s.legendQual}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow" aria-hidden />
                  {s.legendSingles}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue" aria-hidden />
                  {s.legendDoubles}
                </span>
              </div>

              <div className="mt-10 space-y-4">
                {MATCH_PLAN.map((day, i) => {
                  const meta = s.days[i];
                  if (!meta) return null;
                  const rounds = uniqueRounds(day);
                  const cols = COURT_COLS[day.courts.length] ?? "md:grid-cols-3";

                  return (
                    <article
                      key={day.dateKey}
                      id={`msp-${day.dateKey}`}
                      className="overflow-hidden rounded-[0.85rem] bg-panel"
                    >
                      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-white/8 px-5 py-4 md:px-6">
                        <div>
                          <p className="text-[0.62rem] font-bold tracking-[0.16em] text-paper/40 uppercase">
                            {meta.date}
                            <span className="mx-1.5 text-paper/20">·</span>
                            {meta.weekday}
                          </p>
                          <p className="mt-1.5 flex flex-wrap items-center gap-2">
                            {rounds.map((round) => (
                              <RoundChip key={round} round={round} label={s.rounds[round]} />
                            ))}
                          </p>
                        </div>
                        <div className="flex items-end gap-6">
                          <div>
                            <p className="text-[0.58rem] font-bold tracking-[0.14em] text-paper/35 uppercase">
                              {s.startsLabel}
                            </p>
                            <p className="mt-0.5 font-display text-2xl font-semibold tracking-[-0.04em] tabular-nums">
                              {day.start}
                            </p>
                          </div>
                          <div>
                            <p className="text-[0.58rem] font-bold tracking-[0.14em] text-paper/35 uppercase">
                              {s.matchCount}
                            </p>
                            <p className="mt-0.5 font-display text-2xl font-semibold tracking-[-0.04em] tabular-nums">
                              {day.total}
                            </p>
                          </div>
                        </div>
                      </header>

                      <div className={`grid gap-px bg-white/6 ${cols}`}>
                        {day.courts.map((court) => (
                          <div key={court.id} className="bg-panel px-5 py-4 md:px-6">
                            <p className="text-[0.62rem] font-bold tracking-[0.14em] text-yellow uppercase">
                              {s.courts[court.id]}
                            </p>
                            <ol className="mt-3 space-y-2.5">
                              {court.slots.map((slot, slotIndex) => (
                                <li key={`${court.id}-${slotIndex}`} className="flex items-center gap-3">
                                  <span className="w-[4.6rem] shrink-0 text-[0.62rem] font-bold tracking-[0.08em] text-paper/35 uppercase tabular-nums">
                                    {slotIndex === 0 ? court.start : s.followedBy}
                                  </span>
                                  <span
                                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[0.72rem] font-semibold ${ROUND_CHIP[roundKind(slot)]}`}
                                  >
                                    {s.rounds[slot]}
                                  </span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RoundChip({ round, label }: { round: MatchRound; label: string }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold ${ROUND_CHIP[roundKind(round)]}`}
    >
      {label}
    </span>
  );
}
