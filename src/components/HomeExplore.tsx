"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import type { Messages } from "@/lib/content";
import { ROUTES } from "@/lib/routes";

const CARDS: {
  href: string;
  key: keyof Messages["nav"];
  image: string;
  imageClass: string;
  blurb: (t: Messages) => string;
}[] = [
  {
    href: ROUTES.program,
    key: "schedule",
    image: "/media/hero/venue-overview.jpg",
    imageClass: "object-cover object-[62%_28%]",
    blurb: (t) => t.schedule.note,
  },
  {
    href: ROUTES.oyuncular,
    key: "players",
    image: "/media/design/tenis-03.jpg",
    imageClass: "object-cover object-[50%_18%]",
    blurb: (t) => t.players.lead,
  },
  {
    href: ROUTES.mekan,
    key: "venue",
    image: "/media/drone/drone-02.jpg",
    imageClass: "object-cover object-[50%_30%]",
    blurb: (t) => t.venue.body,
  },
  {
    href: ROUTES.atdsk,
    key: "atdsk",
    image: "/media/drone/drone-07.jpg",
    imageClass: "object-cover object-center",
    blurb: (t) => t.club.lead,
  },
];

export function HomeExplore() {
  const { t } = useLanguage();

  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="section-pad mx-auto max-w-[1200px]">
        <div className="flex items-end justify-between gap-4">
          <p className="eyebrow">{t.ui.explore}</p>
          <Link href={ROUTES.turnuva} className="text-sm font-semibold text-ink/60 hover:text-ink">
            {t.nav.about} →
          </Link>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              prefetch={false}
              className="group overflow-hidden border border-line-dark bg-surface transition hover:border-ink/20"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className={`${card.imageClass} transition duration-500 group-hover:scale-[1.03]`}
                  sizes="(max-width:768px) 100vw, 50vw"
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-yellow transition group-hover:scale-x-100" />
              </div>
              <div className="p-5">
                <h2 className="font-display text-xl font-bold tracking-[-0.03em]">{t.nav[card.key]}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">{card.blurb(t)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
