"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { NAV_LINKS, ROUTES } from "@/lib/routes";
import { PlayerTicker } from "./PlayerTicker";

function linkPath(href: string) {
  return href.split("#")[0] || "/";
}

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const home = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  function isActive(href: string) {
    const path = linkPath(href);
    if (path !== pathname) return false;
    if (path === "/") return true;
    const targetHash = href.includes("#") ? `#${href.split("#")[1]}` : "";
    if (path === ROUTES.program) {
      if (targetHash === "#match-plan") return hash === "#match-plan";
      if (targetHash === "#etkinlikler") return hash !== "#match-plan";
    }
    return true;
  }

  const bar = home ? "bg-ink text-paper" : "bg-paper/95 text-ink backdrop-blur-md";
  const muted = home ? "text-paper/55 hover:text-paper" : "text-ink/50 hover:text-ink";
  const strong = home ? "text-paper" : "text-ink";
  const line = home ? "border-white/10" : "border-line-dark";

  return (
    <header className={`sticky top-0 z-50 overflow-x-hidden ${bar}`}>
      <PlayerTicker />

      <div className={`border-b ${line}`}>
        <div className="mx-auto flex h-[3.75rem] w-full max-w-[1280px] items-center gap-2 px-3 sm:gap-3 sm:px-4 md:h-16 md:px-6">
          <Link href="/" className="relative z-20 flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
            <span className="relative h-9 w-[3.6rem] overflow-hidden sm:h-10 sm:w-[4.1rem] md:h-11 md:w-[4.4rem]">
              <Image
                src="/logo-clear.png"
                alt="Adana Open"
                fill
                className="object-contain object-left"
                sizes="80px"
                priority
              />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className={`block text-[0.62rem] font-bold tracking-[0.16em] uppercase ${home ? "text-yellow" : "text-ink/45"}`}>
                WTA 125
              </span>
              <span className={`block text-[0.68rem] font-semibold ${home ? "text-paper/70" : "text-ink/55"}`}>
                {t.hero.date}
              </span>
            </span>
          </Link>

          <div className="z-20 ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-2.5">
            <div
              className={`hidden items-center rounded-full p-0.5 text-[0.65rem] font-bold tracking-wide sm:flex ${home ? "bg-white/10" : "bg-paper-soft"}`}
            >
              <button
                type="button"
                onClick={() => setLocale("tr")}
                className={`rounded-full px-2.5 py-1 uppercase ${
                  locale === "tr" ? (home ? "bg-yellow text-ink" : "bg-ink text-paper") : home ? "text-paper/55" : "text-ink/40"
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-2.5 py-1 uppercase ${
                  locale === "en" ? (home ? "bg-yellow text-ink" : "bg-ink text-paper") : home ? "text-paper/55" : "text-ink/40"
                }`}
              >
                EN
              </button>
            </div>
            <Link href={ROUTES.iletisim} className="btn btn-primary !px-2.5 !py-1.5 text-[0.62rem] sm:!px-3 sm:text-[0.65rem] md:!px-4 md:!py-2">
              {t.nav.tickets}
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-4 flex-col gap-1.5">
                <span className={`h-px transition ${home ? "bg-paper" : "bg-ink"} ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                <span className={`h-px transition ${home ? "bg-paper" : "bg-ink"} ${open ? "opacity-0" : ""}`} />
                <span className={`h-px transition ${home ? "bg-paper" : "bg-ink"} ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <nav
          className={`hidden border-t lg:block ${line}`}
          aria-label={t.ui.explore}
        >
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-stretch justify-center gap-x-4 px-4 md:px-6 xl:justify-between xl:gap-x-3">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative shrink-0 py-2.5 text-[0.68rem] font-semibold tracking-wide whitespace-nowrap transition xl:text-[0.78rem] ${
                    active ? strong : muted
                  }`}
                >
                  {t.nav[link.key]}
                  {active ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow" /> : null}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {open && (
        <div className={`flex min-h-[calc(100svh-7.5rem)] flex-col px-6 py-6 lg:hidden ${home ? "bg-ink text-paper" : "bg-paper text-ink"}`}>
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b py-3.5 font-display text-[1.45rem] font-bold ${line} ${
                  isActive(link.href) ? "" : home ? "text-paper/70" : "text-ink/70"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:hidden">
            <div className={`flex w-fit items-center rounded-full p-0.5 text-[0.7rem] font-bold tracking-wide ${home ? "bg-white/10" : "bg-paper-soft"}`}>
              <button
                type="button"
                onClick={() => setLocale("tr")}
                className={`rounded-full px-3 py-1.5 uppercase ${
                  locale === "tr" ? (home ? "bg-yellow text-ink" : "bg-ink text-paper") : home ? "text-paper/55" : "text-ink/40"
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1.5 uppercase ${
                  locale === "en" ? (home ? "bg-yellow text-ink" : "bg-ink text-paper") : home ? "text-paper/55" : "text-ink/40"
                }`}
              >
                EN
              </button>
            </div>
          </div>
          <Link href={ROUTES.iletisim} onClick={() => setOpen(false)} className="btn btn-primary mt-6 w-full">
            {t.nav.tickets}
          </Link>
        </div>
      )}
    </header>
  );
}
