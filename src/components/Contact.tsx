"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <>
      <section id="tickets" className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/media/drone/drone-06.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void/88 via-void/60 to-void/25" />
          <div className="brand-stripes absolute inset-y-0 right-0 w-[min(42vw,420px)] opacity-70" />
        </div>
        <div className="pointer-events-none absolute right-[-8%] bottom-0 h-[72%] w-[58%] opacity-90 md:right-[-4%] md:h-[120%] md:w-[min(38vw,420px)]">
          <Image
            src="/media/brand/kaplan-bust.webp"
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="420px"
          />
        </div>
        <div className="section-pad relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 py-24 md:flex-row md:items-center md:py-28">
          <div className="max-w-2xl text-white">
            <SectionHeading title={t.tickets.title} accent={t.tickets.titleAccent || undefined} />
            <p className="mt-3 max-w-lg text-white/70">{t.tickets.body}</p>
          </div>
          <a href="#contact" className="btn btn-primary relative z-[1]">
            {t.hero.ctaNotify}
          </a>
        </div>
      </section>

      <section id="contact" className="bg-void py-24 md:py-32">
        <div className="section-pad mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                accent={t.contact.titleAccent}
              />
              <p className="mt-4 max-w-lg text-paper/60">{t.contact.body}</p>

              <div className="mt-8 max-w-md">
                <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.16em] text-paper/40 uppercase">
                  {t.contact.notify}
                </p>
                {done ? (
                  <p className="rounded-full border border-green/40 bg-green/15 px-5 py-3 text-sm font-medium text-green">
                    {t.contact.submitted}
                  </p>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/35 focus:border-yellow/50"
                    />
                    <button type="submit" className="btn btn-primary shrink-0">
                      {t.contact.submit}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:info@adanaopen.com"
                  className="rounded-[1.2rem] border border-white/8 bg-panel p-5"
                >
                  <p className="text-[0.62rem] tracking-[0.16em] text-paper/40 uppercase">
                    {t.contact.emailLabel}
                  </p>
                  <p className="mt-2 font-serif text-2xl">
                    info@adanaopen.com
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/adana.open/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.2rem] border border-white/8 bg-panel p-5"
                >
                  <p className="text-[0.62rem] tracking-[0.16em] text-paper/40 uppercase">
                    Instagram
                  </p>
                  <p className="mt-2 font-serif text-2xl text-yellow">
                    {t.contact.instagram}
                  </p>
                </a>
                <a
                  href="tel:+903222341155"
                  className="rounded-[1.2rem] border border-white/8 bg-panel p-5"
                >
                  <p className="text-[0.62rem] tracking-[0.16em] text-paper/40 uppercase">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-2 font-serif text-2xl">
                    +90 322 234 11 55
                  </p>
                </a>
                <div className="rounded-[1.2rem] border border-white/8 bg-panel p-5">
                  <p className="text-[0.62rem] tracking-[0.16em] text-paper/40 uppercase">
                    {t.contact.hostLabel}
                  </p>
                  <p className="mt-2 font-serif text-2xl">ATDSK</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] lg:min-h-full">
                <Image
                  src="/media/ai/editorial-ball.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
