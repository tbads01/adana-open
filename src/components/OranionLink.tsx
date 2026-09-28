"use client";

import type { ReactNode } from "react";
import { ORANION_URL } from "@/lib/site";

export function OranionLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <a href={ORANION_URL} target="_blank" rel="noreferrer" className={className} onClick={onClick}>
      {children}
    </a>
  );
}
