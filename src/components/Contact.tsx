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
      <section id="tickets" className="bg-paper">
        <div className="relative h-[38svh] min-h-[240px] w-full md:h-[46svh]">
          <Image
            src="/media/drone/drone-06.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow" />
        </div>
        <div className="section-pad mx-auto flex max-w-[1200px] flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:py-14">
          <div className="max-w-2xl">
            <SectionHeading tone="dark" title={t.tickets.title} accent={t.tickets.titleAccent || undefined} />
            <p className="mt-3 max-w-lg text-ink/60">{t.tickets.body}</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            {t.hero.ctaNotify}
          </a>
        </div>
      </section>

      <section id="contact" className="border-t border-line-dark bg-paper py-16 md:py-24">
        <div className="section-pad mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                tone="dark"
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                accent={t.contact.titleAccent}
              />
              <p className="mt-4 max-w-lg text-ink/60">{t.contact.body}</p>

              <div className="mt-8 max-w-md">
                <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
                  {t.contact.notify}
                </p>
                {done ? (
                  <p className="border border-green/40 bg-green/10 px-5 py-3 text-sm font-medium text-green-deep">
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
                      className="min-w-0 flex-1 border border-line-dark bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-ink"
                    />
                    <button type="submit" className="btn btn-primary shrink-0">
                      {t.contact.submit}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="mailto:info@adanaopen.com" className="border border-line-dark bg-surface p-5">
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{t.contact.emailLabel}</p>
                  <p className="mt-2 text-sm text-ink">info@adanaopen.com</p>
                </a>
                <a
                  href="https://www.instagram.com/adana.open/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-line-dark bg-surface p-5"
                >
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">Instagram</p>
                  <p className="mt-2 text-sm text-ink">{t.contact.instagram}</p>
                </a>
                <a href="tel:+903222341155" className="border border-line-dark bg-surface p-5">
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{t.contact.phoneLabel}</p>
                  <p className="mt-2 text-sm text-ink">+90 322 234 11 55</p>
                </a>
                <div className="border border-line-dark bg-surface p-5">
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{t.contact.hostLabel}</p>
                  <p className="mt-2 text-sm text-ink">ATDSK</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
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
