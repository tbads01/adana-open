"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { goHomeSection } from "@/lib/nav";

const links = [
  { href: "/atdsk", key: "atdsk" as const },
  { href: "/#about", key: "about" as const },
  { href: "/#players", key: "players" as const },
  { href: "/#venue", key: "venue" as const },
  { href: "/#schedule", key: "schedule" as const },
  { href: "/#experience", key: "experience" as const },
  { href: "/#contact", key: "contact" as const },
];

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        scrolled || open ? "border-b border-white/10 bg-void/92 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-[4.75rem] max-w-[1400px] items-center justify-between gap-4 md:h-[5.25rem]">
        <Link href="/" className="relative z-20 shrink-0">
          <Image
            src="/logo-clear.png"
            alt="Adana Open"
            width={200}
            height={162}
            className="h-12 w-auto md:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {links.map((link) => {
            const active = link.href === "/atdsk" && pathname === "/atdsk";
            const className = `text-[0.82rem] font-medium transition hover:text-yellow ${
              active ? "text-yellow" : "text-white/78"
            }`;
            return link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                className={className}
                onClick={(e) => {
                  e.preventDefault();
                  goHomeSection(link.href);
                }}
              >
                {t.nav[link.key]}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={className}>
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-20 flex items-center gap-2">
          <div className="flex rounded-full border border-white/15 bg-black/25 p-0.5 text-[0.68rem] font-bold">
            {(["tr", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`rounded-full px-2.5 py-1 uppercase transition ${
                  locale === code ? "bg-yellow text-ink" : "text-white/65 hover:text-white"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
            aria-label="Menu"
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
        <div className="border-t border-white/10 bg-void px-6 py-7 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    goHomeSection(link.href);
                  }}
                  className="font-display text-3xl font-semibold tracking-[-0.03em] text-paper"
                >
                  {t.nav[link.key]}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-semibold tracking-[-0.03em] text-paper"
                >
                  {t.nav[link.key]}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
