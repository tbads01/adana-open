"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { PORTAL } from "@/lib/routes";
import { CONTEST_CLOSE } from "@/lib/site";
import { IconClose, IconTrophy } from "./Icons";
import { SiteLink } from "./SiteLink";

const DISMISS_KEY = "ao_contest_promo";
const CLOSE_MS = Date.parse(CONTEST_CLOSE);

function contestOpen(now = Date.now()) {
  return now < CLOSE_MS;
}

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function ContestCountdown() {
  const { t } = useLanguage();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const ms = now == null ? 0 : Math.max(0, CLOSE_MS - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  const units = [
    [now == null ? "––" : pad(days), t.countdown.days],
    [now == null ? "––" : pad(hours), t.countdown.hours],
    [now == null ? "––" : pad(minutes), t.countdown.minutes],
    [now == null ? "––" : pad(seconds), t.countdown.seconds],
  ] as const;

  return (
    <div className="grid grid-cols-4 gap-2">
      {units.map(([value, label]) => (
        <div key={label} className="rounded-xl bg-paper-soft px-2 py-2 text-center">
          <p className="font-display text-lg font-extrabold tabular-nums leading-none">{value}</p>
          <p className="mt-1 text-[0.58rem] font-bold tracking-[0.12em] text-ink/45 uppercase">{label}</p>
        </div>
      ))}
    </div>
  );
}

export function ContestLink({
  className,
  children,
  onClick,
  "aria-label": ariaLabel,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
}) {
  return (
    <SiteLink href={PORTAL.contest} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </SiteLink>
  );
}

export function ContestLaunchDialog() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(contestOpen());
    const id = window.setInterval(() => setOpen(contestOpen()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    try {
      if (window.sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      return;
    }
    const timer = window.setTimeout(() => setDialog(true), 500);
    return () => window.clearTimeout(timer);
  }, [open]);

  function dismiss() {
    setDialog(false);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    if (!dialog) return;
    const prev = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prev?.focus();
    };
  }, [dialog]);

  if (!dialog) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button type="button" className="absolute inset-0 bg-ink/70" aria-label={t.contest.close} onClick={dismiss} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-t-[1.5rem] bg-paper text-ink shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-3xl"
      >
        <div className="flex items-start gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow text-ink">
            <IconTrophy className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[0.62rem] font-bold tracking-[0.14em] text-ink/45 uppercase">{t.contest.cta}</p>
            <h2 id={titleId} className="mt-1 font-display text-xl font-extrabold tracking-[-0.03em]">
              {t.contest.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-soft"
            onClick={dismiss}
            aria-label={t.contest.close}
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-3 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5 sm:pb-5">
          <p className="text-sm leading-relaxed text-ink/70">{t.contest.lead}</p>
          <p className="text-[0.68rem] font-bold tracking-[0.08em] text-ink/45 uppercase">{t.contest.deadline}</p>
          <ContestCountdown />
          <ContestLink className="btn btn-primary w-full" onClick={dismiss}>
            {t.contest.join}
          </ContestLink>
        </div>
      </div>
    </div>
  );
}
