"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { MORE_LINKS, NAV_LINKS, ROUTES } from "@/lib/routes";

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        home
          ? "border-white/10 bg-ink text-paper"
          : "border-line-dark bg-paper/95 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1200px] items-center gap-4 px-4 md:px-8">
        <Link href="/" className="relative z-20 flex shrink-0 items-center gap-3">
          <span className="relative h-11 w-[4.4rem] overflow-hidden">
            <Image
              src="/logo-clear.png"
              alt="Adana Open"
              fill
              className="object-contain object-left"
              sizes="80px"
              priority
            />
          </span>
          <span className={`hidden text-[0.62rem] font-bold tracking-[0.16em] uppercase sm:block ${home ? "text-yellow" : "text-ink/45"}`}>
            WTA 125
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[0.8rem] font-semibold tracking-wide transition ${
                  active ? (home ? "text-paper" : "text-ink") : home ? "text-paper/60 hover:text-paper" : "text-ink/50 hover:text-ink"
                }`}
              >
                {t.nav[link.key]}
                {active ? <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-yellow" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="z-20 ml-auto flex items-center gap-2.5">
          <div className={`flex items-center rounded-full p-0.5 text-[0.65rem] font-bold tracking-wide ${home ? "bg-white/10" : "bg-paper-soft"}`}>
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
          <div className="hidden lg:block">
            <Link href={ROUTES.iletisim} className="btn btn-primary !px-4 !py-2">
              {t.nav.tickets}
            </Link>
          </div>
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

      {open && (
        <div className={`flex min-h-[calc(100svh-4.5rem)] flex-col px-6 py-8 lg:hidden ${home ? "bg-ink text-paper" : "bg-paper text-ink"}`}>
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b py-4 font-display text-[1.85rem] font-bold ${
                  home ? "border-white/10" : "border-line-dark"
                } ${pathname === link.href ? "" : home ? "text-paper/70" : "text-ink/70"}`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
          <div className={`mt-6 flex flex-col gap-3 text-base ${home ? "text-paper/55" : "text-ink/55"}`}>
            {MORE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
          <Link href={ROUTES.iletisim} onClick={() => setOpen(false)} className="btn btn-primary mt-auto w-full">
            {t.nav.tickets}
          </Link>
        </div>
      )}
    </header>
  );
}
