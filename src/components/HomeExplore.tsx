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
    href: ROUTES.deneyim,
    key: "experience",
    image: "/media/ai/concept-03.jpg",
    imageClass: "object-cover object-center",
    blurb: (t) => t.experience.body,
  },
];

const MORE: { href: string; key: keyof Messages["nav"] }[] = [
  { href: ROUTES.turnuva, key: "about" },
  { href: ROUTES.atdsk, key: "atdsk" },
  { href: ROUTES.iletisim, key: "contact" },
];

export function HomeExplore() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-white/8 bg-ink py-16 md:py-20">
      <div className="section-pad mx-auto max-w-[1400px]">
        <p className="eyebrow">{t.ui.explore}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative min-h-[220px] overflow-hidden rounded-[0.85rem] md:min-h-[280px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                className={`${card.imageClass} transition duration-700 group-hover:scale-[1.04]`}
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/35 to-void/10" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h2 className="font-display text-[1.7rem] font-semibold tracking-[-0.03em] text-white md:text-[2rem]">
                  {t.nav[card.key]}
                </h2>
                <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-white/72">
                  {card.blurb(t)}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {MORE.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-[0.85rem] border border-white/10 bg-white/4 px-5 py-4 transition hover:border-yellow/40 hover:bg-white/7"
            >
              <span className="font-display text-xl font-semibold tracking-[-0.03em] text-paper group-hover:text-yellow">
                {t.nav[link.key]}
              </span>
              <span className="text-yellow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
