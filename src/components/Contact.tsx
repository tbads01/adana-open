"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t, locale } = useLanguage();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <>
      <section id="tickets" className="border-y border-line bg-surface py-16 md:py-20">
        <div className="section-pad mx-auto flex max-w-[1280px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">{t.nav.tickets}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {locale === "tr"
                ? "Biletler yakında satışta."
                : "Tickets on sale soon."}
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft/75">
              {locale === "tr"
                ? "Seans ve kategori bilgileri yayınlandığında ilk siz haberdar olun."
                : "Be the first to know when session and category details go live."}
            </p>
          </div>
          <a href="#contact" className="btn btn-primary shrink-0">
            {t.hero.ctaNotify}
          </a>
        </div>
      </section>

      <section id="contact" className="relative bg-paper py-24 md:py-32">
        <div className="section-pad mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                {t.contact.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {t.contact.body}
              </p>

              <div className="mt-8 max-w-md">
                <p className="mb-3 text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
                  {t.contact.notify}
                </p>
                {done ? (
                  <p className="rounded-full border border-green/30 bg-green/10 px-5 py-3 text-sm font-medium text-green-deep">
                    {t.contact.submitted}
                  </p>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-2 sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="min-w-0 flex-1 rounded-full border border-line bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-green/50"
                    />
                    <button type="submit" className="btn btn-primary shrink-0">
                      {t.contact.submit}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href="https://www.instagram.com/adana.open/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-line bg-surface p-5 transition hover:border-green/40"
                >
                  <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                    Instagram
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-green-deep">
                    {t.contact.instagram}
                  </p>
                </a>
                <a
                  href="mailto:info@adanaopen.com"
                  className="border border-line bg-surface p-5 transition hover:border-yellow/50"
                >
                  <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                    {t.contact.emailLabel}
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink">
                    info@adanaopen.com
                  </p>
                </a>
                <a
                  href="tel:+903222341155"
                  className="border border-line bg-surface p-5 transition hover:border-green/40"
                >
                  <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink">
                    +90 322 234 11 55
                  </p>
                </a>
                <div className="border border-line bg-surface p-5">
                  <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                    {t.contact.hostLabel}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    ATDSK
                  </p>
                  <a
                    href="https://atdsk.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm text-green-deep hover:text-ink"
                  >
                    atdsk.com ↗
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative overflow-hidden border border-line">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/venue/court-1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={160}
                    height={128}
                    className="h-14 w-auto"
                  />
                  <p className="mt-4 text-sm tracking-[0.14em] text-white/85 uppercase">
                    {t.hero.date}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
