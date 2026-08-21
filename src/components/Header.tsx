"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const links = [
  { href: "#about", key: "about" as const },
  { href: "#venue", key: "venue" as const },
  { href: "#schedule", key: "schedule" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#partners", key: "partners" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/92 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-[4.5rem] max-w-[1280px] items-center justify-between gap-4">
        <a href="#top" className="relative z-20 flex items-center gap-3">
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

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.76rem] font-medium tracking-[0.08em] text-ink-soft/75 uppercase transition-colors hover:text-green-deep"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="relative z-20 flex items-center gap-2">
          <div className="flex overflow-hidden rounded-full border border-line bg-surface/90 p-0.5 text-[0.72rem] font-semibold shadow-sm">
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
            href="#tickets"
            className="btn btn-ghost hidden !px-3.5 !py-2 text-[0.72rem] md:inline-flex"
          >
            {t.nav.tickets}
          </a>
          <a
            href="#partners"
            className="btn btn-primary hidden !px-3.5 !py-2 text-[0.72rem] lg:inline-flex"
          >
            {t.nav.partners}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/90 xl:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper/98 px-6 py-8 xl:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-tight text-ink"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setOpen(false)}
              className="btn btn-ghost w-fit"
            >
              {t.nav.tickets}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
