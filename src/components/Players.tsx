"use client";

import Image from "next/image";
import { FLAGS, countryLabel } from "@/lib/flags";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import data from "@/lib/players.json";

type Player = {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  country: string;
  dob: string;
  rank: number | null;
  careerHigh?: number | null;
  wtaUrl: string;
  image: string | null;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function splitName(player: Player) {
  const last = player.lastName || player.name.split(" ").slice(-1)[0];
  const first = player.firstName || player.name.replace(last, "").trim();
  return { first, last };
}

function isTop100(player: Player) {
  return player.rank != null && player.rank > 0 && player.rank <= 100;
}

function isCareerPeak(player: Player) {
  return player.careerHigh != null && player.careerHigh > 0 && player.careerHigh <= 60;
}

function RankPair({
  player,
  nowLabel,
  careerLabel,
  size = "md",
}: {
  player: Player;
  nowLabel: string;
  careerLabel: string;
  size?: "sm" | "md" | "lg";
}) {
  const num = size === "lg" ? "text-[2.35rem] md:text-[2.8rem]" : size === "md" ? "text-[1.65rem]" : "text-[1.2rem]";

  return (
    <div className="flex items-end gap-5">
      <div>
        <p className={`font-display leading-none font-extrabold tracking-[-0.04em] tabular-nums ${isTop100(player) ? "text-ink" : "text-ink/70"} ${num}`}>
          {player.rank ?? "—"}
        </p>
        <p className="mt-1 text-[0.58rem] font-bold tracking-[0.14em] text-ink/40 uppercase">{nowLabel}</p>
      </div>
      {player.careerHigh ? (
        <div>
          <p className={`font-display leading-none font-extrabold tracking-[-0.04em] tabular-nums ${isCareerPeak(player) ? "text-ink" : "text-ink/30"} ${num}`}>
            {player.careerHigh}
          </p>
          <p className="mt-1 text-[0.58rem] font-bold tracking-[0.14em] text-ink/40 uppercase">{careerLabel}</p>
        </div>
      ) : null}
    </div>
  );
}

function PlayerCard({
  player,
  nowLabel,
  careerLabel,
  featured = false,
}: {
  player: Player;
  nowLabel: string;
  careerLabel: string;
  featured?: boolean;
}) {
  const { first, last } = splitName(player);

  return (
    <a href={player.wtaUrl} target="_blank" rel="noreferrer" className="group block">
      <div className={`relative overflow-hidden bg-paper-soft ${featured ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
        {player.image ? (
          <Image
            src={player.image}
            alt={player.name}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 50vw, 20vw"
            quality={70}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className={`font-display font-medium text-ink/25 ${featured ? "text-5xl" : "text-4xl"}`}>
              {initials(player.name)}
            </span>
          </div>
        )}
        <p className="absolute top-2.5 right-2.5 text-sm drop-shadow-sm">
          {FLAGS[player.country] ?? player.country}
        </p>
      </div>
      <div className="mt-3 border-t border-line-dark pt-3">
        <RankPair player={player} nowLabel={nowLabel} careerLabel={careerLabel} size={featured ? "md" : "sm"} />
        <h3
          className={`mt-2.5 font-display leading-tight font-bold tracking-[-0.03em] text-ink ${
            featured ? "text-[1.15rem] md:text-[1.3rem]" : "text-[1.02rem]"
          }`}
        >
          {first} {last}
        </h3>
      </div>
    </a>
  );
}

function RankBoard({
  players,
  nowLabel,
  careerLabel,
}: {
  players: Player[];
  nowLabel: string;
  careerLabel: string;
}) {
  const { t } = useLanguage();
  return (
    <div className="overflow-hidden bg-ink text-paper">
      <div className="h-1 bg-yellow" />
      <div className="hidden grid-cols-[2.5rem_minmax(0,1fr)_5.5rem_5.5rem] gap-3 px-5 py-3 text-[0.62rem] font-bold tracking-[0.14em] text-paper/40 uppercase md:grid">
        <span>#</span>
        <span />
        <span className="text-right">{nowLabel}</span>
        <span className="text-right">{careerLabel}</span>
      </div>
      <ol>
        {players.map((player, i) => {
          const { first, last } = splitName(player);
          const hotNow = isTop100(player);
          const hotPeak = isCareerPeak(player);
          return (
            <li key={player.id}>
              <a
                href={player.wtaUrl}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 border-t border-white/10 px-4 py-3 transition hover:bg-white/10 md:grid-cols-[2.5rem_minmax(0,1fr)_5.5rem_5.5rem] md:px-5"
              >
                <span className="font-display text-sm font-bold tabular-nums text-paper/35">{i + 1}</span>
                <span className="flex min-w-0 items-center gap-3">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden bg-panel-2">
                    {player.image ? (
                      <Image src={player.image} alt="" fill className="object-cover object-top" sizes="40px" quality={70} />
                    ) : (
                      <span className="flex h-full items-center justify-center font-display text-[0.65rem] text-paper/40">
                        {initials(player.name)}
                      </span>
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-[0.95rem] font-bold tracking-[-0.02em]">
                      {first} {last}
                    </span>
                    <span className="text-[0.68rem] text-paper/45">
                      {FLAGS[player.country] ?? ""} {countryLabel(player.country, t.ui.world || "Dünya")}
                    </span>
                  </span>
                </span>
                <span className="flex items-baseline justify-end gap-4 md:contents">
                  <span className={`text-right font-display text-lg font-extrabold tabular-nums md:text-xl ${hotNow ? "text-yellow" : "text-paper"}`}>
                    {player.rank ?? "—"}
                  </span>
                  <span className={`text-right font-display text-lg font-extrabold tabular-nums md:text-xl ${hotPeak ? "text-yellow" : "text-paper/40"}`}>
                    {player.careerHigh ?? "—"}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function Players({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t } = useLanguage();
  const main = data.mainDraw as Player[];
  const spotlight = data.spotlight as Player[];
  const turkish = spotlight.filter((p) => p.country === "TUR");
  const byId = new Map<number, Player>();
  [...main, ...spotlight].forEach((p) => byId.set(p.id, p));
  const ranked = [...byId.values()].sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999));
  const top100 = ranked.filter(isTop100);
  const careerPeaks = ranked.filter((p) => isCareerPeak(p) && !isTop100(p));
  const rest = main
    .filter((p) => !top100.some((x) => x.id === p.id) && !careerPeaks.some((x) => x.id === p.id))
    .sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999));

  return (
    <section id="players" className={`bg-paper text-ink ${hideIntro ? "pb-16 md:pb-20" : "py-24 md:py-32"}`}>
      <div className="section-pad mx-auto max-w-[1200px]">
        {hideIntro ? null : (
          <Reveal>
            <SectionHeading
              eyebrow={t.players.eyebrow}
              title={t.players.title}
              accent={t.players.titleAccent}
              className="max-w-3xl"
            />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">{t.players.lead}</p>
          </Reveal>
        )}

        {turkish.length > 0 ? (
          <div className={`${hideIntro ? "mt-0" : "mt-12"}`}>
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-[1.85rem]">
              {t.players.turkeyLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
              {turkish.map((player, i) => (
                <Reveal key={player.id} delay={Math.min(i * 30, 120)}>
                  <PlayerCard
                    player={player}
                    nowLabel={t.players.nowLabel}
                    careerLabel={t.players.careerLabel}
                    featured
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-16">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-[1.85rem]">
              {t.players.rankLabel}
            </p>
            <p className="text-sm text-ink/45">
              {t.players.nowLabel} · {t.players.careerLabel}
            </p>
          </div>
          <RankBoard players={ranked} nowLabel={t.players.nowLabel} careerLabel={t.players.careerLabel} />
        </div>

        {top100.length > 0 ? (
          <div className="mt-16">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-[1.85rem]">
              {t.players.topRankLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
              {top100.map((player, i) => (
                <Reveal key={player.id} delay={Math.min(i * 24, 120)}>
                  <PlayerCard player={player} nowLabel={t.players.nowLabel} careerLabel={t.players.careerLabel} featured />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {careerPeaks.length > 0 ? (
          <div className="mt-16">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-[1.85rem]">
              {t.players.careerLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {careerPeaks.map((player, i) => (
                <Reveal key={player.id} delay={Math.min(i * 24, 120)}>
                  <PlayerCard player={player} nowLabel={t.players.nowLabel} careerLabel={t.players.careerLabel} featured />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-16">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
            {t.players.mainLabel}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {rest.map((player, i) => (
              <Reveal key={player.id} delay={Math.min(i * 18, 120)}>
                <PlayerCard player={player} nowLabel={t.players.nowLabel} careerLabel={t.players.careerLabel} />
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-ink/40">
          {t.players.note}{" "}
          <a
            href="https://www.wtatennis.com/tournaments/1179/adana-125/2026"
            target="_blank"
            rel="noreferrer"
            className="text-ink underline underline-offset-2 hover:opacity-70"
          >
            wtatennis.com
          </a>
        </p>
      </div>
    </section>
  );
}
