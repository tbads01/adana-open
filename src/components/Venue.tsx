"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Adana+Tenis+Da%C4%9F+ve+Su+Sporlar%C4%B1+Kul%C3%BCb%C3%BC";

const gallery = [
  { src: "/media/drone/drone-02.jpg", className: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[520px]" },
  { src: "/media/drone/drone-07.jpg", className: "min-h-[180px]" },
  { src: "/media/drone/drone-04.jpg", className: "min-h-[180px]" },
  { src: "/media/drone/drone-11.jpg", className: "md:col-span-2 min-h-[220px]" },
];

export function Venue() {
  const { t } = useLanguage();

  return (
    <section id="venue" className="bg-void py-24 md:py-32">
      <div className="section-pad mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t.venue.eyebrow}
              title={t.venue.title}
              accent={t.venue.titleAccent}
              className="max-w-2xl"
            />
            <p className="max-w-md text-base leading-relaxed text-paper/60">
              {t.venue.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={40}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-[1.2rem] ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/8 bg-panel p-6 md:grid-cols-[1.3fr_1fr] md:p-8">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/media/brand/atdsk-mark.png"
                  alt="ATDSK"
                  width={48}
                  height={48}
                  className="h-11 w-11 object-contain"
                />
                <div>
                  <p className="text-[0.62rem] tracking-[0.16em] text-paper/40 uppercase">
                    {t.contact.hostLabel}
                  </p>
                  <p className="font-medium text-paper">{t.venue.host}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-paper/60">{t.venue.address}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/atdsk" className="btn btn-ghost-light !px-4 !py-2 text-xs">
                  {t.venue.clubCta}
                </Link>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-ghost-light !px-4 !py-2 text-xs">
                  {t.venue.mapCta} ↗
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {t.venue.clubFacts.map((f) => (
                <div key={f.label} className="rounded-xl bg-white/4 p-4">
                  <p className="text-[0.6rem] tracking-[0.14em] text-paper/40 uppercase">
                    {f.label}
                  </p>
                  <p className="mt-1 font-serif text-xl text-paper">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
