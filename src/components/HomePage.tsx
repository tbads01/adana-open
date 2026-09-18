"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { Countdown } from "./Countdown";
import { HashRedirect } from "./HashRedirect";
import { Hero } from "./Hero";
import { HomeFacts } from "./HomeFacts";

const HomeExplore = dynamic(() => import("./HomeExplore").then((m) => ({ default: m.HomeExplore })));
const ClubHighlights = dynamic(() => import("./ClubHighlights").then((m) => ({ default: m.ClubHighlights })));
const Partners = dynamic(() => import("./Partners").then((m) => ({ default: m.Partners })));

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
      <main id="main-content">
        <Hero />
        <HomeFacts />
        <Countdown />
        <HomeExplore />
        <ClubHighlights />
        <Partners />
      </main>
    </>
  );
}
