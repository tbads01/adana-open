"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Significance() {
  const { t } = useLanguage();
  const s = t.significance;

  return (
    <section id="significance" className="relative overflow-hidden bg-void">
      <div className="section-pad relative mx-auto max-w-[1400px] py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t.club.missionEyebrow}
            title={t.club.missionTitle}
            accent={t.club.missionAccent}
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-2xl font-display text-[1.35rem] leading-snug font-medium tracking-[-0.03em] text-paper/92 md:text-[1.55rem]">
              {s.lead}
            </p>
            <div className="mt-8 max-w-2xl space-y-4 text-[0.98rem] leading-relaxed text-paper/62">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <Image
                src="/media/design/tenis-03.jpg"
                alt=""
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover object-[50%_18%] md:aspect-[5/6]"
              />
              <blockquote className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/80 to-transparent px-6 pb-6 pt-24">
                <p className="font-display text-[1.2rem] leading-snug font-medium tracking-[-0.03em] text-paper md:text-[1.35rem]">
                  {s.quote}
                </p>
                <p className="mt-4 text-[0.68rem] font-bold tracking-[0.2em] text-yellow uppercase">
                  {s.quoteAttr}
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <p className="mt-20 text-[0.68rem] font-bold tracking-[0.2em] text-yellow uppercase">
            {s.pathwayLabel}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-4 md:gap-0">
            {s.pathway.map((item, i) => (
              <div
                key={item.step}
                className="relative border-t border-yellow/40 pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-6 first:md:border-l-0 first:md:pl-0"
              >
                <p className="font-display text-3xl font-bold tracking-wide text-yellow">{item.step}</p>
                <h3 className="mt-3 font-serif text-2xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/55">{item.desc}</p>
                {i < s.pathway.length - 1 ? (
                  <span className="pointer-events-none absolute top-3 right-3 hidden h-px w-6 bg-yellow/30 md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-8 border-t border-white/10 pt-12 md:grid-cols-2">
          {s.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 40}>
              <h3 className="font-serif text-[1.55rem] text-paper">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/58">{pillar.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative border-y border-yellow/20 bg-yellow py-5 text-ink">
        <p className="section-pad mb-3 text-[0.62rem] font-bold tracking-[0.22em] uppercase">
          {s.namesLabel}
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-10 pr-10">
            {[...s.names, ...s.names, ...s.names, ...s.names].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display shrink-0 text-[clamp(1.5rem,3.2vw,2.4rem)] font-semibold tracking-[-0.03em]"
              >
                {name}
                <span className="ml-10 text-ink/20">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
