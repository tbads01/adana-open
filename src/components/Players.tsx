"use client";

import Image from "next/image";
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

const FLAGS: Record<string, string> = {
  ARG: "🇦🇷",
  ARM: "🇦🇲",
  AND: "🇦🇩",
  CAN: "🇨🇦",
  COL: "🇨🇴",
  CRO: "🇭🇷",
  CZE: "🇨🇿",
  FRA: "🇫🇷",
  GEO: "🇬🇪",
  GER: "🇩🇪",
  HUN: "🇭🇺",
  ITA: "🇮🇹",
  LAT: "🇱🇻",
  NED: "🇳🇱",
  POL: "🇵🇱",
  RUS: "🇷🇺",
  SRB: "🇷🇸",
  SUI: "🇨🇭",
  TUR: "🇹🇷",
  USA: "🇺🇸",
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

function RankMeta({
  player,
  rankLabel,
  careerLabel,
}: {
  player: Player;
  rankLabel: string;
  careerLabel: string;
}) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.62rem] font-semibold tracking-[0.08em] uppercase">
      <span className={isTop100(player) ? "text-ink" : "text-ink/45"}>
        {rankLabel} {player.rank ?? "—"}
      </span>
      {player.careerHigh ? (
        <span className={isCareerPeak(player) ? "text-ink" : "text-ink/40"}>
          {careerLabel} {player.careerHigh}
        </span>
      ) : null}
    </p>
  );
}

function PlayerCard({
  player,
  rankLabel,
  careerLabel,
  featured = false,
}: {
  player: Player;
  rankLabel: string;
  careerLabel: string;
  featured?: boolean;
}) {
  const { first, last } = splitName(player);
  const highlight = isTop100(player) || isCareerPeak(player);

  return (
    <a href={player.wtaUrl} target="_blank" rel="noreferrer" className="group block">
      <div className={`relative overflow-hidden bg-paper-soft ${featured ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
        {player.image ? (
          <Image
            src={player.image}
            alt={player.name}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 50vw, 25vw"
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
        {highlight ? (
          <span className="absolute top-2.5 left-2.5 bg-yellow px-2 py-1 text-[0.58rem] font-bold tracking-wide text-ink">
            {isCareerPeak(player) && player.careerHigh
              ? `${careerLabel} ${player.careerHigh}`
              : `${rankLabel} ${player.rank ?? "—"}`}
          </span>
        ) : null}
      </div>
      <div className="mt-3">
        <RankMeta player={player} rankLabel={rankLabel} careerLabel={careerLabel} />
        <h3
          className={`mt-1 font-display leading-tight font-bold tracking-[-0.03em] text-ink ${
            featured ? "text-[1.15rem] md:text-[1.3rem]" : "text-[1.02rem]"
          }`}
        >
          {first} {last}
        </h3>
      </div>
    </a>
  );
}

function PlayerRow({
  player,
  rankLabel,
  careerLabel,
}: {
  player: Player;
  rankLabel: string;
  careerLabel: string;
}) {
  const { first, last } = splitName(player);

  return (
    <a
      href={player.wtaUrl}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 border border-line-dark bg-surface px-2.5 py-2 transition hover:bg-paper-soft"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden bg-panel-2">
        {player.image ? (
          <Image src={player.image} alt="" fill className="object-cover object-top" sizes="48px" />
        ) : (
          <span className="flex h-full items-center justify-center font-display text-xs font-medium text-ink/30">
            {initials(player.name)}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-sm font-semibold tracking-[-0.02em] text-ink">
          {first} {last}
        </p>
        <RankMeta player={player} rankLabel={rankLabel} careerLabel={careerLabel} />
      </div>
      <span className="text-sm">{FLAGS[player.country] ?? ""}</span>
    </a>
  );
}

export function Players({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t } = useLanguage();
  const main = data.mainDraw as Player[];
  const spotlight = data.spotlight as Player[];
  const turkish = spotlight.filter((p) => p.country === "TUR");
  const byId = new Map<number, Player>();
  [...main, ...spotlight].forEach((p) => byId.set(p.id, p));
  const top100 = [...byId.values()]
    .filter(isTop100)
    .sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999));
  const careerPeaks = [...byId.values()]
    .filter((p) => isCareerPeak(p) && !isTop100(p))
    .sort((a, b) => (a.careerHigh ?? 9999) - (b.careerHigh ?? 9999));
  const watch = spotlight.filter((p) => p.country !== "TUR" && !isTop100(p) && !isCareerPeak(p));
  const topIds = new Set([...top100, ...careerPeaks].map((p) => p.id));
  const rest = main
    .filter((p) => !topIds.has(p.id))
    .sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999));

  return (
    <section id="players" className={`bg-paper text-ink ${hideIntro ? "pb-16 md:pb-20" : "py-24 md:py-32"}`}>
      <div className="section-pad mx-auto max-w-[1400px]">
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
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {turkish.map((player, i) => (
                <Reveal key={player.id} delay={Math.min(i * 30, 120)}>
                  <PlayerCard
                    player={player}
                    rankLabel={t.players.rankLabel}
                    careerLabel={t.players.careerLabel}
                    featured
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {top100.length > 0 ? (
          <div className="mt-14">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-[1.85rem]">
              {t.players.topRankLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {top100.map((player, i) => (
                <Reveal key={player.id} delay={Math.min(i * 24, 120)}>
                  <PlayerCard player={player} rankLabel={t.players.rankLabel} careerLabel={t.players.careerLabel} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {careerPeaks.length > 0 ? (
          <div className="mt-14">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-[1.85rem]">
              {t.players.careerLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {careerPeaks.map((player, i) => (
                <Reveal key={player.id} delay={Math.min(i * 24, 120)}>
                  <PlayerCard player={player} rankLabel={t.players.rankLabel} careerLabel={t.players.careerLabel} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-14">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
            {t.players.mainLabel}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {rest.map((player, i) => (
              <Reveal key={player.id} delay={Math.min(i * 18, 120)}>
                <PlayerCard player={player} rankLabel={t.players.rankLabel} careerLabel={t.players.careerLabel} />
              </Reveal>
            ))}
          </div>
        </div>

        {watch.length > 0 ? (
          <div className="mt-10">
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
              {t.players.watchLabel}
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {watch.map((player) => (
                <PlayerRow
                  key={player.id}
                  player={player}
                  rankLabel={t.players.rankLabel}
                  careerLabel={t.players.careerLabel}
                />
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-8 text-xs leading-relaxed text-ink/40">
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
