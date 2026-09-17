"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Significance() {
  const { t } = useLanguage();
  const s = t.significance;

  return (
    <section id="significance" className="bg-paper text-ink">
      <div className="section-pad mx-auto max-w-[1180px] py-16 md:py-24">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow={t.club.missionEyebrow}
            title={t.club.missionTitle}
            accent={t.club.missionAccent}
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-2xl font-display text-[1.3rem] leading-snug font-medium tracking-[-0.03em] text-ink md:text-[1.5rem]">
              {s.lead}
            </p>
            <div className="mt-8 max-w-2xl space-y-4 text-[0.98rem] leading-relaxed text-ink/62">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="relative overflow-hidden">
              <Image
                src="/media/design/tenis-03.jpg"
                alt=""
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover object-[50%_18%] md:aspect-[5/6]"
              />
              <blockquote className="mt-5">
                <p className="font-display text-[1.15rem] leading-snug font-medium tracking-[-0.03em] text-ink md:text-[1.3rem]">
                  {s.quote}
                </p>
                <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
                  {s.quoteAttr}
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <p className="mt-16 text-[0.68rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
            {s.pathwayLabel}
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-4">
            {s.pathway.map((item) => (
              <div key={item.step} className="border-t border-line-dark pt-5">
                <p className="font-display text-2xl text-ink/30">{item.step}</p>
                <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-8 border-t border-line-dark pt-12 md:grid-cols-2">
          {s.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 40}>
              <h3 className="font-display text-[1.4rem] text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{pillar.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-y border-line-dark bg-surface py-5">
        <p className="section-pad mb-3 text-[0.62rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
          {s.namesLabel}
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-10 pr-10">
            {[...s.names, ...s.names, ...s.names, ...s.names].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display shrink-0 text-[clamp(1.4rem,3vw,2.1rem)] font-medium tracking-[-0.03em]"
              >
                {name}
                <span className="ml-10 text-ink/15">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
