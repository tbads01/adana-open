"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t } = useLanguage();
  const [first, ...rest] = t.experience.areas;

  return (
    <section id="experience" className="bg-void py-24 md:py-32">
      <div className="section-pad mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              accent={t.experience.titleAccent}
            />
            <p className="max-w-md text-base text-paper/55">{t.experience.body}</p>
          </div>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="group relative min-h-[340px] overflow-hidden rounded-[1.5rem] md:min-h-[520px]">
              <Image
                src={first.image}
                alt={first.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width:1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <h3 className="font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                  {first.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/75">{first.desc}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 4).map((area, i) => (
              <Reveal key={area.title} delay={60 + i * 40}>
                <article className="group relative aspect-[16/10] overflow-hidden rounded-[1.3rem] lg:aspect-auto lg:min-h-[122px]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width:1024px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-void/75 via-void/20 to-transparent" />
                  <div className="absolute inset-y-0 left-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em]">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">{area.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {rest.length > 4 && (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {rest.slice(4).map((area, i) => (
              <Reveal key={area.title} delay={i * 40}>
                <article className="group relative aspect-[16/8] overflow-hidden rounded-[1.3rem]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-3xl font-bold tracking-[-0.03em]">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">{area.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-paper/35">{t.experience.disclaimer}</p>
      </div>
    </section>
  );
}
