import { content } from "./content";
import { MATCH_PLAN, type MatchDay } from "./match-plan";
import players from "./players.json";

export const MOBILE_FACTS_URL = "https://m.adanaopen.com/api/facts";

export type SharedDay = {
  weekday: string;
  date: string;
  stage: string;
  events: { time: string; title: string; tag: "match" | "music" | "event" }[];
};

export type SharedFacts = {
  source: string;
  updatedAt: string;
  ticketsUrl: { tr: string; en: string };
  ticketsBody: { tr: string; en: string };
  scheduleNote: { tr: string; en: string };
  matchNote: { tr: string; en: string };
  days: { tr: SharedDay[]; en: SharedDay[] };
  matchPlan: MatchDay[];
  foodCourtStands: string[];
  players: typeof players;
  faqs?: { q: { tr: string; en: string }; a: { tr: string; en: string } }[];
  announcements?: {
    id: string;
    date: string;
    pin?: boolean;
    tag: { tr: string; en: string };
    title: { tr: string; en: string };
    body: { tr: string; en: string };
    href?: string;
  }[];
};

export function localFacts(): SharedFacts {
  return {
    source: "adanaopen.com",
    updatedAt: players.updated,
    ticketsUrl: {
      tr: "https://www.biletix.com/etkinlik-grup/5638498105/TURKIYE/tr/adana-open-wta-125",
      en: "https://www.biletix.com/etkinlik-grup/5638498105/TURKIYE/en/adana-open-wta-125",
    },
    ticketsBody: {
      tr: content.tr.tickets.body,
      en: content.en.tickets.body,
    },
    scheduleNote: {
      tr: content.tr.schedule.note,
      en: content.en.schedule.note,
    },
    matchNote: {
      tr: content.tr.schedule.matchNote,
      en: content.en.schedule.matchNote,
    },
    days: {
      tr: content.tr.schedule.days,
      en: content.en.schedule.days,
    },
    matchPlan: MATCH_PLAN,
    foodCourtStands: [
      "Bun the Bun",
      "Taco Maco",
      "Ico Fried Chicken",
      "Hayat Büfe",
      "Bowl Art",
      "Doğan Kaymaklı",
      "Hüsnü Usta Et Döner",
      "Major Chocolate",
      "Maki",
    ],
    players,
    faqs: [],
    announcements: [],
  };
}

function isFacts(value: unknown): value is SharedFacts {
  if (!value || typeof value !== "object") return false;
  const row = value as SharedFacts;
  return Array.isArray(row.matchPlan) && Array.isArray(row.days?.tr) && Array.isArray(row.days?.en);
}

export async function getSharedFacts(): Promise<SharedFacts> {
  try {
    const res = await fetch(MOBILE_FACTS_URL, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`facts ${res.status}`);
    const data: unknown = await res.json();
    if (!isFacts(data)) throw new Error("facts shape");
    return data;
  } catch {
    return localFacts();
  }
}
