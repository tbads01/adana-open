"use client";

import { useLanguage } from "@/lib/i18n";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { PageView } from "./PageView";
import { Players } from "./Players";
import { Schedule } from "./Schedule";
import { Significance } from "./Significance";
import { Venue } from "./Venue";

export function TurnuvaPage() {
  const { t } = useLanguage();
  return (
    <PageView title={t.nav.about} description={t.about.body[0]}>
      <About />
      <Significance />
    </PageView>
  );
}

export function OyuncularPage() {
  const { t } = useLanguage();
  return (
    <PageView title={t.nav.players} description={t.players.lead}>
      <Players />
    </PageView>
  );
}

export function MekanPage() {
  const { t } = useLanguage();
  return (
    <PageView title={t.nav.venue} description={t.venue.body}>
      <Venue />
    </PageView>
  );
}

export function ProgramPage() {
  const { t } = useLanguage();
  return (
    <PageView title={t.nav.schedule} description={t.schedule.note}>
      <Schedule />
    </PageView>
  );
}

export function DeneyimPage() {
  const { t } = useLanguage();
  return (
    <PageView title={t.nav.experience} description={t.experience.body}>
      <Experience />
    </PageView>
  );
}

export function IletisimPage() {
  const { t } = useLanguage();
  return (
    <PageView title={t.nav.contact} description={t.contact.body}>
      <Contact />
    </PageView>
  );
}
