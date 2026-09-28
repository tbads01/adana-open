"use client";

import { flagFor } from "@/lib/flags";
import { useLanguage } from "@/lib/i18n";
import { useFacts } from "@/lib/facts-context";
import ticker from "@/lib/ticker.json";
import { ROUTES } from "@/lib/routes";
import { SiteLink } from "./SiteLink";

type DrawPlayer = {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  rank: number | null;
};

function PlayerChip({ player }: { player: DrawPlayer }) {
  const rank = player.rank && player.rank > 0 ? player.rank : null;
  return (
    <span className="inline-flex shrink-0 items-center gap-2 px-4 py-1.5 text-[0.68rem] font-semibold tracking-wide whitespace-nowrap">
      <span className="text-[0.85rem] leading-none">{flagFor(player.country)}</span>
      <span>
        {player.firstName} {player.lastName}
      </span>
      {rank ? <span className="tabular-nums text-ink/55">#{rank}</span> : null}
    </span>
  );
}

export function PlayerTicker() {
  const { t } = useLanguage();
  const facts = useFacts();
  const players = ((facts.players?.mainDraw as DrawPlayer[] | undefined) ?? (ticker as DrawPlayer[]))
    .slice()
    .sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999));

  return (
    <div className="w-full bg-yellow text-ink">
      <p className="sr-only">
        {t.players.mainLabel}. {t.nav.players}.
      </p>
      <SiteLink href={ROUTES.oyuncular} className="sr-only">
        {t.players.title}
      </SiteLink>
      <div className="marquee-viewport relative w-full overflow-hidden">
        <div className="marquee-track flex w-max items-center" aria-hidden>
          {[0, 1].map((copy) => (
            <div key={copy} className={copy === 1 ? "marquee-dup flex" : "flex"}>
              {players.map((player) => (
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
