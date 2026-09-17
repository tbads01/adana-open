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

function PlayerCard({
  player,
  rankLabel,
  featured = false,
}: {
  player: Player;
  rankLabel: string;
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
      </div>
      <div className="mt-3">
        <p className="text-[0.62rem] font-semibold tracking-[0.12em] text-ink/40 uppercase">
          {featured ? "TR · " : ""}
          {rankLabel} {player.rank ?? "—"}
        </p>
        <h3
          className={`mt-1 font-display leading-tight font-medium tracking-[-0.03em] text-ink ${
            featured ? "text-[1.15rem] md:text-[1.3rem]" : "text-[1.02rem]"
          }`}
        >
          {first} {last}
        </h3>
      </div>
    </a>
  );
}

function PlayerRow({ player, rankLabel }: { player: Player; rankLabel: string }) {
  const { first, last } = splitName(player);

  return (
    <a
      href={player.wtaUrl}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 border border-line-dark bg-surface px-2.5 py-2 transition hover:bg-paper-soft"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-panel-2">
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
        <p className="mt-0.5 text-[0.65rem] text-ink/50">
          {rankLabel} {player.rank ?? "—"} · {player.country}
        </p>
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
  const watch = spotlight.filter((p) => p.country !== "TUR");

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
            <p className="font-display text-2xl font-medium tracking-[-0.03em] text-ink md:text-[1.85rem]">
              {t.players.turkeyLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {turkish.map((player, i) => (
                <Reveal key={player.id} delay={Math.min(i * 30, 120)}>
                  <PlayerCard player={player} rankLabel={t.players.rankLabel} featured />
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
            {main.map((player, i) => (
              <Reveal key={player.id} delay={Math.min(i * 18, 120)}>
                <PlayerCard player={player} rankLabel={t.players.rankLabel} />
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
                <PlayerRow key={player.id} player={player} rankLabel={t.players.rankLabel} />
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
