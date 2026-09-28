import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { isExternalHref } from "@/lib/routes";

export function SiteLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
