"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { NAV_LINKS, ROUTES } from "@/lib/routes";

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";
  const solid = scrolled || open || !onHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        solid ? "border-b border-white/10 bg-void/94 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-[1400px] items-center justify-between gap-2 px-3 sm:px-5 md:h-[4.75rem] md:px-8 lg:px-10">
        <Link href="/" className="relative z-20 h-10 w-12 min-w-12 max-w-12 shrink-0 overflow-hidden md:h-14 md:w-16 md:min-w-16 md:max-w-16">
          <Image
            src="/logo-clear.png"
            alt="Adana Open"
            fill
            className="object-contain object-left"
            sizes="70px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-3 xl:gap-5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.78rem] font-medium transition hover:text-yellow ${
                  active ? "text-yellow" : "text-white/78"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-20 flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
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
          <div className="flex rounded-full border border-white/15 bg-black/25 p-0.5 text-[0.62rem] font-bold sm:text-[0.68rem]">
            {(["tr", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`rounded-full px-1.5 py-1 uppercase transition sm:px-2.5 ${
                  locale === code ? "bg-yellow text-ink" : "text-white/65 hover:text-white"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <Link
            href={ROUTES.iletisim}
            className="btn btn-primary hidden !px-3.5 !py-2 text-[0.68rem] lg:inline-flex"
          >
            {t.nav.tickets}
          </Link>
        </div>
      </div>

      {open && (
        <div className="flex min-h-[calc(100svh-4.25rem)] flex-col border-t border-white/10 bg-void px-6 py-7 lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-display text-[2rem] font-semibold tracking-[-0.03em] ${
                  pathname === link.href ? "text-yellow" : "text-paper"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
          <Link
            href={ROUTES.iletisim}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            {t.nav.tickets}
          </Link>
        </div>
      )}
    </header>
  );
}
