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

export function TurnuvaPage() {
  const { t } = useLanguage();
  return (
    <PageView
      title={t.nav.about}
      description={t.about.body[0]}
      masthead={
        <PageMasthead
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          accent={t.about.titleAccent}
          lead={t.about.body[0]}
          image="/media/drone/drone-08.jpg"
          imageClassName="object-cover object-top"
        />
      }
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
      masthead={
        <PageMasthead
          eyebrow={t.players.eyebrow}
          title={t.players.title}
          accent={t.players.titleAccent}
          lead={t.players.lead}
          image="/media/design/tenis-03.jpg"
          imageClassName="object-cover object-[50%_18%]"
        />
      }
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
      masthead={
        <PageMasthead
          eyebrow={t.venue.eyebrow}
          title={t.venue.title}
          accent={t.venue.titleAccent}
          lead={t.venue.body}
          image="/media/drone/drone-02.jpg"
          imageClassName="object-cover object-[50%_30%]"
        />
      }
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
      masthead={
        <PageMasthead
          eyebrow={t.schedule.eyebrow}
          title={t.schedule.title}
          accent={t.schedule.titleAccent}
          lead={t.schedule.note}
          image="/media/hero/venue-overview.jpg"
          imageClassName="object-cover object-[62%_28%]"
        />
      }
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
      masthead={
        <PageMasthead
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          accent={t.experience.titleAccent}
          lead={t.experience.body}
          image="/media/ai/concept-03.jpg"
        />
      }
    >
      <Experience hideIntro />
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
