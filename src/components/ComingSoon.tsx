"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#dceaf8_0%,#f4f8f6_58%,#e7f1eb_100%)]" />
  ),
});

export function ComingSoon() {
  const { t, locale, setLocale } = useLanguage();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-paper">
      <div className="absolute inset-0">
        <HeroCanvas />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-paper/55" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[min(62%,720px)] bg-gradient-to-r from-paper via-paper/75 to-transparent" />
      </div>

      <header className="section-pad relative z-20 mx-auto flex h-[4.5rem] max-w-[1180px] items-center justify-between">
        <a href="https://adanaopen.com" className="flex items-center gap-3">
          <Image
            src="/logo-nav.png"
            alt="Adana Open"
            width={120}
            height={96}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden text-[0.65rem] font-semibold tracking-[0.22em] text-muted uppercase sm:inline">
            WTA 125
          </span>
        </a>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-line bg-surface/85 p-0.5 text-[0.72rem] font-semibold shadow-sm">
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={`rounded-full px-2.5 py-1.5 transition ${
                locale === "tr" ? "bg-yellow text-ink" : "text-muted hover:text-ink"
              }`}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1.5 transition ${
                locale === "en" ? "bg-yellow text-ink" : "text-muted hover:text-ink"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="https://www.instagram.com/adana.open/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost !px-3.5 !py-2 text-[0.75rem]"
          >
            Instagram
          </a>
        </div>
      </header>

      <main className="section-pad relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1180px] flex-col justify-center pb-16 pt-6">
        <div className="max-w-2xl">
          <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-green-deep uppercase shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green" />
            {t.coming}
          </div>

          <p className="animate-rise-delay-1 eyebrow mt-8">{t.kicker}</p>

          <div className="animate-rise-delay-1 mt-5 flex flex-wrap items-end gap-x-5 gap-y-2">
            <Image
              src="/logo.png"
              alt="adana open"
              width={320}
              height={255}
              className="h-[4.4rem] w-auto sm:h-[5.8rem]"
              priority
            />
          </div>

          <h1 className="animate-rise-delay-2 mt-7 font-display text-[clamp(2.6rem,7vw,5rem)] leading-[0.96] font-semibold tracking-[-0.035em] text-ink">
            {t.headline}
          </h1>

          <p className="animate-rise-delay-3 mt-5 max-w-xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
            {t.sub}
          </p>

          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                {locale === "tr" ? "Tarih" : "Dates"}
              </p>
              <p className="mt-1 font-medium text-ink">{t.date}</p>
            </div>
            <div>
              <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                {locale === "tr" ? "Mekan" : "Venue"}
              </p>
              <p className="mt-1 font-medium text-ink">{t.place}</p>
            </div>
            <div>
              <p className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                Domain
              </p>
              <p className="mt-1 font-medium text-green-deep">adanaopen.com</p>
            </div>
          </div>

          <div className="animate-rise-delay-3 mt-10 max-w-md">
            <p className="mb-3 text-[0.72rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {t.notify}
            </p>
            {done ? (
              <p className="rounded-full border border-green/30 bg-green/10 px-5 py-3 text-sm font-medium text-green-deep">
                {t.submitted}
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
                  placeholder={t.emailPlaceholder}
                  className="min-w-0 flex-1 rounded-full border border-line bg-surface/90 px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-green/50"
                />
                <button type="submit" className="btn btn-primary shrink-0">
                  {t.submit}
                </button>
              </form>
            )}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-line pt-6 text-sm text-ink-soft/70">
            <a
              href="https://www.instagram.com/adana.open/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-deep"
            >
              {t.follow} · @adana.open
            </a>
            <a
              href="https://atdsk.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-deep"
            >
              ATDSK
            </a>
            <span className="text-muted">{t.rights}</span>
          </div>
        </div>
      </main>
    </div>
  );
}
