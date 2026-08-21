"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative bg-paper-soft py-24 md:py-32">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              {t.experience.title}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-soft/75">
              {t.experience.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.experience.areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 50}>
              <article className="group relative isolate overflow-hidden border border-line bg-surface">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {area.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted">
          {t.experience.disclaimer}
        </p>
      </div>
    </section>
  );
}
