"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-paper-soft py-24 md:py-32">
      <div className="section-pad mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              {t.about.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft/80 sm:text-lg">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden border border-line bg-surface shadow-[0_18px_50px_rgba(18,32,24,0.06)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/brand-ball.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-3">
                {t.about.facts.map((fact) => (
                  <div key={fact.label} className="bg-surface p-4">
                    <p className="text-[0.62rem] tracking-[0.14em] text-muted uppercase">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 font-display text-base font-semibold text-ink sm:text-lg">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
