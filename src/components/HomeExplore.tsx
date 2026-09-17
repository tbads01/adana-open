"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import type { Messages } from "@/lib/content";
import { ROUTES } from "@/lib/routes";

const FEATURED = {
  href: ROUTES.program,
  key: "schedule" as const,
  image: "/media/hero/venue-overview.jpg",
  imageClass: "object-cover object-[62%_28%]",
  blurb: (t: Messages) => t.schedule.note,
};

const REST: {
  href: string;
  key: keyof Messages["nav"];
  image: string;
  imageClass: string;
  blurb: (t: Messages) => string;
}[] = [
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

export function HomeExplore() {
  const { t } = useLanguage();

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="section-pad mx-auto max-w-[1180px]">
        <p className="eyebrow">{t.ui.explore}</p>
        <Link href={FEATURED.href} className="group mt-8 block">
          <div className="relative aspect-[16/8] overflow-hidden md:aspect-[16/7]">
            <Image
              src={FEATURED.image}
              alt=""
              fill
              className={`${FEATURED.imageClass} transition duration-700 group-hover:scale-[1.02]`}
              sizes="100vw"
            />
          </div>
          <div className="mt-4 max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              {t.nav[FEATURED.key]}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">{FEATURED.blurb(t)}</p>
          </div>
        </Link>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {REST.map((card) => (
            <Link key={card.href} href={card.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className={`${card.imageClass} transition duration-700 group-hover:scale-[1.03]`}
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-[-0.03em]">{t.nav[card.key]}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/55">{card.blurb(t)}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line-dark pt-6 text-sm text-ink/60">
          <Link href={ROUTES.turnuva} className="hover:text-ink">
            {t.nav.about}
          </Link>
          <Link href={ROUTES.atdsk} className="hover:text-ink">
            {t.nav.atdsk}
          </Link>
          <Link href={ROUTES.iletisim} className="hover:text-ink">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
