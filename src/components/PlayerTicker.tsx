"use client";

import Link from "next/link";
import { FLAGS } from "@/lib/flags";
import { useLanguage } from "@/lib/i18n";
import data from "@/lib/players.json";
import { ROUTES } from "@/lib/routes";

type DrawPlayer = {
  id: number;
  name: string;
  lastName: string;
  firstName: string;
  country: string;
  rank: number | null;
};

const PLAYERS = [...(data.mainDraw as DrawPlayer[])].sort((a, b) => {
  const ar = a.rank && a.rank > 0 ? a.rank : 9999;
  const br = b.rank && b.rank > 0 ? b.rank : 9999;
  return ar - br;
});

function PlayerChip({ player }: { player: DrawPlayer }) {
  const rank = player.rank && player.rank > 0 ? player.rank : null;
  return (
    <span className="inline-flex shrink-0 items-center gap-2 px-4 py-1.5 text-[0.68rem] font-semibold tracking-wide whitespace-nowrap">
      <span className="text-[0.85rem] leading-none">{FLAGS[player.country] ?? ""}</span>
      <span>
        {player.firstName} {player.lastName}
      </span>
      {rank ? <span className="tabular-nums text-ink/55">#{rank}</span> : null}
    </span>
  );
}

export function PlayerTicker() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-yellow text-ink">
      <p className="sr-only">
        {t.players.mainLabel}. {t.nav.players}.
      </p>
      <Link href={ROUTES.oyuncular} className="sr-only">
        {t.players.title}
      </Link>
      <div className="marquee-viewport relative w-full overflow-hidden">
        <div className="marquee-track flex w-max items-center" aria-hidden>
          {[0, 1].map((copy) => (
            <div key={copy} className={copy === 1 ? "marquee-dup flex" : "flex"}>
              {PLAYERS.map((player) => (
                <span key={`${copy}-${player.id}`} className="flex items-center">
                  <PlayerChip player={player} />
                  <span className="h-3 w-px bg-ink/15" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
