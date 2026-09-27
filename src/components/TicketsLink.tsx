"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import { TICKETS_URL } from "@/lib/tickets";
import { useFacts } from "@/lib/facts-context";

export function TicketsLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const { locale } = useLanguage();
  const facts = useFacts();
  return (
    <a
      href={facts.ticketsUrl[locale] || TICKETS_URL[locale]}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
