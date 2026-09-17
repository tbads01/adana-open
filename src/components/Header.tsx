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
    <header className="sticky top-0 z-50 border-b border-line-dark bg-paper/95 backdrop-blur-md">
      <div className="mx-auto grid h-[4.25rem] w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
        <Link
          href="/"
          className="relative z-20 h-11 w-[4.4rem] min-w-[4.4rem] max-w-[4.4rem] justify-self-start overflow-hidden"
        >
          <Image
            src="/logo-clear.png"
            alt="Adana Open"
            fill
            className="object-contain object-left"
            sizes="80px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] tracking-wide transition ${
                  active ? "text-ink" : "text-ink/50 hover:text-ink"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="z-20 flex items-center justify-self-end gap-4">
          <div className="flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-wide">
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={`uppercase ${locale === "tr" ? "text-ink" : "text-ink/35 hover:text-ink"}`}
            >
              TR
            </button>
            <span className="text-ink/20">/</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`uppercase ${locale === "en" ? "text-ink" : "text-ink/35 hover:text-ink"}`}
            >
              EN
            </button>
          </div>
          <Link
            href={ROUTES.iletisim}
            className="hidden text-[0.8rem] text-ink/70 underline decoration-ink/25 underline-offset-4 hover:text-ink hover:decoration-ink lg:inline"
          >
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
              <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="flex min-h-[calc(100svh-4.25rem)] flex-col bg-paper px-6 py-8 lg:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line-dark py-4 font-display text-[2rem] ${
                  pathname === link.href ? "text-ink" : "text-ink/70"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 text-base text-ink/55">
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
