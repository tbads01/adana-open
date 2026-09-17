"use client";

import { useEffect, type ReactNode } from "react";

export function PageView({
  title,
  description,
  masthead,
  children,
}: {
  title: string;
  description?: string;
  masthead?: ReactNode;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = `${title} | Adana Open`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <main
      id="main-content"
    >
      {masthead}
      {masthead ? null : <h1 className="sr-only">{title}</h1>}
      {children}
    </main>
  );
}
