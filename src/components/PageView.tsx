"use client";

import { useEffect, type ReactNode } from "react";

export function PageView({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = `${title} | Adana Open`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <main className="[&>section:first-of-type]:!pt-32 md:[&>section:first-of-type]:!pt-40">
      <h1 className="sr-only">{title}</h1>
      {children}
    </main>
  );
}
