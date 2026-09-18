"use client";

import { useLanguage } from "@/lib/i18n";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { PageMasthead } from "./PageMasthead";
import { PageView } from "./PageView";
import { Players } from "./Players";
import { Schedule } from "./Schedule";
import { Significance } from "./Significance";
import { Venue } from "./Venue";
import { IconCalendar, IconMail, IconPin, IconPlayers, IconSpark, IconTrophy } from "./Icons";

export function TurnuvaPage() {
  const { t } = useLanguage();
  return (
    <PageView
      title={t.nav.about}
      description={t.about.body[0]}
      masthead={<PageMasthead eyebrow={t.hero.kicker} title={t.nav.about} icon={IconTrophy} />}
    >
      <About hideIntro />
      <Significance />
    </PageView>
  );
}

export function OyuncularPage() {
  const { t } = useLanguage();
  return (
    <PageView
      title={t.nav.players}
      description={t.players.lead}
      masthead={<PageMasthead eyebrow={t.hero.kicker} title={t.nav.players} icon={IconPlayers} />}
    >
      <Players hideIntro />
    </PageView>
  );
}

export function MekanPage() {
  const { t } = useLanguage();
  return (
    <PageView
      title={t.nav.venue}
      description={t.venue.body}
      masthead={<PageMasthead eyebrow={t.hero.kicker} title={t.nav.venue} icon={IconPin} />}
    >
      <Venue hideIntro />
    </PageView>
  );
}

export function ProgramPage() {
  const { t } = useLanguage();
  return (
    <PageView
      title={t.nav.schedule}
      description={t.schedule.note}
      masthead={<PageMasthead eyebrow={t.hero.kicker} title={t.nav.schedule} icon={IconCalendar} />}
    >
      <Schedule hideIntro />
    </PageView>
  );
}

export function DeneyimPage() {
  const { t } = useLanguage();
  return (
    <PageView
      title={t.nav.experience}
      description={t.experience.body}
      masthead={<PageMasthead eyebrow={t.hero.kicker} title={t.nav.experience} icon={IconSpark} />}
    >
      <Experience hideIntro />
    </PageView>
  );
}

export function IletisimPage() {
  const { t } = useLanguage();
  return (
    <PageView
      title={t.nav.contact}
      description={t.contact.body}
      masthead={<PageMasthead eyebrow={t.hero.kicker} title={t.nav.contact} icon={IconMail} />}
    >
      <Contact />
    </PageView>
  );
}
