"use client";

import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { ComingSoon } from "./ComingSoon";
import { useEffect } from "react";

function DocumentTitle() {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [t.meta.title, t.meta.description]);
  return null;
}

export function HomePage() {
  return (
    <LanguageProvider>
      <DocumentTitle />
      <ComingSoon />
    </LanguageProvider>
  );
}
