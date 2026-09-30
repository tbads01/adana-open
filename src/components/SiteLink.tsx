import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { isExternalHref } from "@/lib/routes";

export function SiteLink({
  href,
  className,
  children,
  onClick,
  "aria-label": ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
