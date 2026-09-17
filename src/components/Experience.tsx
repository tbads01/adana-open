"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t } = useLanguage();
  const [first, ...rest] = t.experience.areas;

  return (
    <section id="experience" className={`bg-paper ${hideIntro ? "pb-16 md:pb-20" : "py-24 md:py-32"}`}>
      <div className="section-pad mx-auto max-w-[1400px]">
        {hideIntro ? null : (
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow={t.experience.eyebrow}
                title={t.experience.title}
                accent={t.experience.titleAccent}
              />
              <p className="max-w-md text-base text-ink/55">{t.experience.body}</p>
            </div>
          </Reveal>
        )}

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article>
              <div className="relative min-h-[340px] overflow-hidden md:min-h-[520px]">
                <Image
                  src={first.image}
                  alt={first.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
              </div>
              <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                {first.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/60">{first.desc}</p>
            </article>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 4).map((area, i) => (
              <Reveal key={area.title} delay={60 + i * 40}>
                <article className="grid gap-4 sm:grid-cols-1 lg:grid-cols-[minmax(0,11rem)_1fr] lg:items-center">
                  <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3]">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 50vw, 120px"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-[-0.03em]">{area.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/55">{area.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {rest.length > 4 && (
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {rest.slice(4).map((area, i) => (
              <Reveal key={area.title} delay={i * 40}>
                <article>
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.03em]">{area.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/55">{area.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <p className="mt-8 text-xs text-ink/35">{t.experience.disclaimer}</p>
      </div>
    </section>
  );
}
