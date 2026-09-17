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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";
  const solid = scrolled || open || !onHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-void/95 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-16 w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-[4.25rem] md:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-20 h-10 w-12 min-w-12 max-w-12 justify-self-start overflow-hidden md:h-12 md:w-14 md:min-w-14 md:max-w-14"
        >
          <Image
            src="/logo-clear.png"
            alt="Adana Open"
            fill
            className="object-contain object-left"
            sizes="56px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.84rem] font-medium tracking-wide transition ${
                  active ? "text-yellow" : "text-white/80 hover:text-white"
                }`}
              >
                {t.nav[link.key]}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-2 mx-auto h-px w-5 bg-yellow" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-20 flex items-center justify-self-end gap-2 sm:gap-3">
          <div className="flex flex-nowrap items-center gap-1.5 whitespace-nowrap text-[0.7rem] font-bold tracking-wide">
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={`uppercase transition ${locale === "tr" ? "text-yellow" : "text-white/45 hover:text-white"}`}
            >
              TR
            </button>
            <span className="text-white/25">/</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`uppercase transition ${locale === "en" ? "text-yellow" : "text-white/45 hover:text-white"}`}
            >
              EN
            </button>
          </div>
          <Link
            href={ROUTES.iletisim}
            className="btn btn-primary hidden !px-4 !py-2 text-[0.68rem] lg:inline-flex"
          >
            {t.nav.tickets}
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-4 flex-col gap-1.5">
              <span className={`h-px bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="flex min-h-[calc(100svh-4rem)] flex-col bg-void px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-1.5 font-display text-[2rem] font-semibold tracking-[-0.03em] ${
                  pathname === link.href ? "text-yellow" : "text-paper"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-lg text-white/70">
            {MORE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-yellow">
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
          <Link
            href={ROUTES.iletisim}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-auto w-full"
          >
            {t.nav.tickets}
          </Link>
        </div>
      )}
    </header>
  );
}
