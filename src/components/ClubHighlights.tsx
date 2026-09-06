"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
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
    <section id="club" className="bg-paper py-24 text-ink md:py-32">
      <div className="section-pad mx-auto max-w-[1400px]">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading tone="dark" eyebrow={c.kicker} title={c.title} accent={c.titleAccent} />
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">{c.lead}</p>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-ink/65">
              {c.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{c.presidentLabel}</p>
                <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em]">{c.president}</p>
                <p className="mt-1 text-sm text-ink/50">{c.presidentSince}</p>
              </div>
              <div>
                <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{t.venue.addressLabel}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{t.venue.address}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/atdsk" className="btn btn-dark">
                {t.venue.clubCta}
              </Link>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {c.mapCta} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-ink text-paper">
              {c.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 px-6 py-4 last:border-b-0"
                >
                  <p className="text-[0.68rem] tracking-[0.14em] text-white/40 uppercase">{fact.label}</p>
                  <p className="font-display text-xl font-semibold tracking-[-0.03em]">{fact.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={40}>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {shots.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
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

        <div className="mt-12">
          <Reveal>
            <SectionHeading tone="dark" title={c.facilitiesLabel} accent={c.facilitiesAccent} />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.facilities.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 25, 120)}>
                <h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={40}>
          <div className="mt-14 rounded-[1.6rem] bg-ink px-6 py-8 text-paper md:px-10 md:py-10">
            <p className="text-[0.62rem] font-bold tracking-[0.2em] text-yellow uppercase">{c.missionEyebrow}</p>
            <h3 className="mt-3 max-w-3xl font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.04em]">
              {c.visionTitle} <span className="text-yellow">{c.visionAccent}</span>
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-paper/65">{c.visionBody}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
