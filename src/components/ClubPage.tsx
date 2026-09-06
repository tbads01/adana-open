"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { goHomeSection } from "@/lib/nav";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { Significance } from "./Significance";
import { SectionHeading } from "./SectionHeading";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Adana+Tenis+Da%C4%9F+ve+Su+Sporlar%C4%B1+Kul%C3%BCb%C3%BC";

const gallery = [
  "/media/drone/drone-02.jpg",
  "/media/drone/drone-07.jpg",
  "/media/drone/drone-04.jpg",
  "/media/drone/drone-11.jpg",
  "/media/hero/venue-overview.jpg",
  "/media/drone/drone-08.jpg",
];

export function ClubPage() {
  const { t } = useLanguage();
  const c = t.club;

  useEffect(() => {
    document.title = c.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", c.metaDescription);
  }, [c.metaTitle, c.metaDescription]);

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate min-h-[72svh] overflow-hidden bg-void">
          <div className="absolute inset-0">
            <Image
              src="/media/drone/drone-02.jpg"
              alt=""
              fill
              priority
              className="object-cover object-[50%_30%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-void/72 via-void/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-transparent to-void/15" />
          </div>
          <div className="section-pad relative mx-auto flex min-h-[72svh] max-w-[1400px] flex-col justify-end pb-16 pt-28">
            <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.22em] text-yellow uppercase">
              <span className="h-px w-8 bg-yellow" />
              {c.kicker}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[0.94] tracking-[-0.045em] text-white">
              {c.title}
              <span className="mt-1 block font-semibold text-yellow">{c.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/78">{c.lead}</p>
          </div>
        </section>

        <section className="bg-paper py-24 text-ink md:py-32">
          <div className="section-pad mx-auto max-w-[1400px]">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <div className="max-w-2xl space-y-4 text-[1.02rem] leading-relaxed text-ink/70">
                  {c.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">
                      {c.presidentLabel}
                    </p>
                    <p className="mt-1 font-serif text-2xl">{c.president}</p>
                    <p className="mt-1 text-sm text-ink/50">{c.presidentSince}</p>
                  </div>
                  <div>
                    <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">
                      {t.venue.addressLabel}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{t.venue.address}</p>
                    <p className="mt-2 text-sm text-ink/70">+90 322 234 11 55 · info@atdsk.com</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-dark">
                    {c.mapCta} ↗
                  </a>
                  <a href="https://atdsk.com" target="_blank" rel="noreferrer" className="btn btn-ghost">
                    {c.websiteCta} ↗
                  </a>
                  <a
                    href="/#about"
                    className="btn btn-ghost"
                    onClick={(e) => {
                      e.preventDefault();
                      goHomeSection("/#about");
                    }}
                  >
                    {c.tournamentCta}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={80} className="lg:col-span-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-line-dark bg-surface">
                  {c.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 border-b border-line-dark px-6 py-4 last:border-b-0"
                    >
                      <p className="text-[0.68rem] tracking-[0.14em] text-ink/40 uppercase">
                        {fact.label}
                      </p>
                      <p className="font-serif text-xl text-ink">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-void py-24 md:py-32">
          <div className="section-pad mx-auto max-w-[1400px]">
            <Reveal>
              <SectionHeading
                eyebrow={c.kicker}
                title={c.facilitiesLabel}
                accent={c.facilitiesAccent}
              />
            </Reveal>

            <Reveal delay={40}>
              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
                {gallery.map((src) => (
                  <div key={src} className="group relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width:768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.facilities.map((item, i) => (
                <Reveal key={item.title} delay={i * 30}>
                  <h3 className="font-serif text-xl text-paper">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Significance />

        <section className="bg-ink py-20 md:py-24">
          <div className="section-pad mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                eyebrow={c.missionEyebrow}
                title={c.visionTitle}
                accent={c.visionAccent}
              />
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/65">{c.visionBody}</p>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5 lg:text-right">
              <a
                href="/#players"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeSection("/#players");
                }}
              >
                {t.nav.players}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
