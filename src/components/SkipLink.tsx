"use client";

import { useLanguage } from "@/lib/i18n";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-link">
      {t.ui.skip}
    </a>
  );
}
