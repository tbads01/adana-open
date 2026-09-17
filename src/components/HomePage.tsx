"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { ClubHighlights } from "./ClubHighlights";
import { Countdown } from "./Countdown";
import { HashRedirect } from "./HashRedirect";
import { Hero } from "./Hero";
import { HomeExplore } from "./HomeExplore";
import { Partners } from "./Partners";

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
    <>
      <DocumentTitle />
      <HashRedirect />
      <main>
        <Hero />
        <Countdown />
        <HomeExplore />
        <ClubHighlights />
        <Partners />
      </main>
    </>
  );
}
