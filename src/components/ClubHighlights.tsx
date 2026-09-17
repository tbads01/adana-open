"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Adana+Tenis+Da%C4%9F+ve+Su+Sporlar%C4%B1+Kul%C3%BCb%C3%BC";

const shots = [
  "/media/drone/drone-02.jpg",
  "/media/drone/drone-07.jpg",
  "/media/drone/drone-04.jpg",
  "/media/hero/venue-overview.jpg",
];

export function ClubHighlights() {
  const { t } = useLanguage();
  const c = t.club;

  return (
    <section id="club" className="bg-paper-soft py-14 text-ink md:py-20">
      <div className="section-pad mx-auto max-w-[1200px]">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading tone="dark" eyebrow={c.kicker} title={c.title} accent={c.titleAccent} />
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">{c.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={ROUTES.atdsk} className="btn btn-primary">
                {t.venue.clubCta}
              </Link>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {c.mapCta} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="overflow-hidden border border-line-dark bg-surface text-ink">
              {c.facts.slice(0, 4).map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line-dark px-5 py-3.5 last:border-b-0"
                >
                  <p className="text-[0.68rem] tracking-[0.14em] text-ink/40 uppercase">{fact.label}</p>
                  <p className="font-display text-lg font-semibold tracking-[-0.03em]">{fact.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={40}>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {shots.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.04]"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
