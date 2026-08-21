"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Venue } from "./Venue";
import { Schedule } from "./Schedule";
import { Experience } from "./Experience";
import { Partners } from "./Partners";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

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
      <Header />
      <main>
        <Hero />
        <About />
        <Venue />
        <Schedule />
        <Experience />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
