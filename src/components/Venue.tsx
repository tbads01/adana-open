"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Adana+Tenis+Da%C4%9F+ve+Su+Sporlar%C4%B1+Kul%C3%BCb%C3%BC";

export function Venue() {
  const { t } = useLanguage();

  return (
    <section id="venue" className="relative bg-sky/35 py-24 md:py-32">
      <div className="section-pad mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid gap-3">
              <div className="relative aspect-[16/10] overflow-hidden border border-line">
                <Image
                  src="/venue/overview-ai.jpg"
                  alt={t.venue.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] overflow-hidden border border-line">
                  <Image
                    src="/venue/court-3.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden border border-line">
                  <Image
                    src="/venue/atdsk-12.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow">{t.venue.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              {t.venue.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft/80 sm:text-lg">
              {t.venue.body}
            </p>

            <div className="mt-8 space-y-5 border-t border-line pt-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/atdsk-logo.png"
                  alt="ATDSK"
                  width={56}
                  height={56}
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                    {t.contact.hostLabel}
                  </p>
                  <p className="mt-0.5 text-ink">{t.venue.host}</p>
                </div>
              </div>

              <div>
                <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                  {t.venue.addressLabel}
                </p>
                <p className="mt-1 max-w-md text-ink-soft/85">{t.venue.address}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border border-line bg-surface p-4">
                  <p className="text-[0.68rem] tracking-[0.16em] text-green-deep uppercase">
                    {t.venue.capacityLabel}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft/85">{t.venue.capacity}</p>
                </div>
                <div className="border border-line bg-surface p-4">
                  <p className="text-[0.68rem] tracking-[0.16em] text-green-deep uppercase">
                    {t.venue.courtsLabel}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft/85">{t.venue.courts}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {t.venue.clubFacts.map((f) => (
                  <div key={f.label} className="border border-line bg-surface/80 p-3">
                    <p className="text-[0.6rem] tracking-[0.12em] text-muted uppercase">
                      {f.label}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold text-ink">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost !px-5"
                >
                  {t.venue.mapCta} ↗
                </a>
                <a
                  href="https://atdsk.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost !px-5"
                >
                  {t.venue.clubCta} ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
