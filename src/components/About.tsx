"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-paper py-24 text-ink md:py-32">
      <div className="section-pad mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              tone="dark"
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              accent={t.about.titleAccent}
            />
            <div className="mt-6 max-w-xl space-y-4 text-[1rem] leading-relaxed text-ink/70">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/media/drone/drone-08.jpg"
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-[1.4rem] border border-line-dark bg-surface md:grid-cols-3 lg:grid-cols-6">
            {t.about.facts.map((fact) => (
              <div
                key={fact.label}
                className="border-r border-b border-line-dark p-5 last:border-r-0 lg:border-b-0 lg:[&:nth-child(6n)]:border-r-0"
              >
                <p className="text-[0.62rem] tracking-[0.16em] text-ink/45 uppercase">
                  {fact.label}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
