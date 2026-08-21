"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Partners() {
  const { t } = useLanguage();

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[linear-gradient(165deg,#e7f1eb_0%,#f4f8f6_50%,#dceaf8_100%)] py-24 md:py-32"
    >
      <div className="absolute inset-0 court-grid opacity-35" />
      <div className="section-pad relative mx-auto max-w-[1280px]">
        <Reveal>
          <p className="eyebrow">{t.partners.eyebrow}</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
              {t.partners.title}
            </h2>
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-ink-soft/80">
                {t.partners.body}
              </p>
              <a
                href="mailto:info@adanaopen.com?subject=Adana%20Open%20Sponsorluk"
                className="btn btn-primary mt-6"
              >
                {t.partners.cta}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {t.partners.tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 50}>
              <div
                className={`flex h-full flex-col border p-5 ${
                  index === 0
                    ? "border-yellow/70 bg-yellow/15"
                    : "border-line bg-surface/85"
                }`}
              >
                <p
                  className={`text-[0.68rem] tracking-[0.16em] uppercase ${
                    index === 0 ? "text-ink" : "text-green-deep"
                  }`}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {tier.name}
                </h3>
                <p className="mt-3 font-serif text-2xl text-ink-soft italic">
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {tier.highlight}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
