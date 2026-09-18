"use client";

import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { useLanguage } from "@/lib/i18n";
import type { Messages } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { IconCalendar, IconClub, IconPin, IconPlayers } from "./Icons";
import { VectorCover } from "./VectorCover";

const CARDS: {
  href: string;
  key: keyof Messages["nav"];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  blurb: (t: Messages) => string;
}[] = [
  {
    href: ROUTES.program,
    key: "schedule",
    icon: IconCalendar,
    blurb: (t) => t.schedule.note,
  },
  {
    href: ROUTES.oyuncular,
    key: "players",
    icon: IconPlayers,
    blurb: (t) => t.players.lead,
  },
  {
    href: ROUTES.mekan,
    key: "venue",
    icon: IconPin,
    blurb: (t) => t.venue.body,
  },
  {
    href: ROUTES.atdsk,
    key: "atdsk",
    icon: IconClub,
    blurb: (t) => t.club.lead,
  },
];

export function HomeExplore() {
  const { t } = useLanguage();

  return (
    <section id="explore" className="bg-paper py-14 md:py-20">
      <div className="section-pad mx-auto max-w-[1200px]">
        <div className="flex items-end justify-between gap-4">
          <p className="eyebrow">{t.ui.explore}</p>
          <Link href={ROUTES.turnuva} prefetch={false} className="text-sm font-semibold text-ink/60 hover:text-ink">
            {t.nav.about} →
          </Link>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                prefetch={false}
                className="group block"
              >
                <VectorCover className="min-h-[220px] transition group-hover:brightness-[1.08] md:min-h-[250px]">
                  <div className="relative flex min-h-[220px] flex-col justify-end p-6 md:min-h-[250px] md:p-7">
                    <span className="absolute top-5 left-5 flex h-11 w-11 items-center justify-center bg-yellow text-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Icon className="pointer-events-none absolute right-4 bottom-4 h-24 w-24 text-yellow/15 md:h-28 md:w-28" />
                    <div className="relative z-10 max-w-md pr-16 text-paper">
                      <h2 className="font-display text-2xl font-bold tracking-[-0.03em]">{t.nav[card.key]}</h2>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-paper/65">{card.blurb(t)}</p>
                    </div>
                  </div>
                </VectorCover>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
