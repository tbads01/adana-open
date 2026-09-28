import { MOBILE_SITE_URL } from "./site";

export const ROUTES = {
  home: "/",
  atdsk: "/atdsk",
  turnuva: "/turnuva",
  oyuncular: "/oyuncular",
  mekan: "/mekan",
  program: "/program",
  deneyim: "/deneyim",
  iletisim: "/iletisim",
} as const;

export const PORTAL = {
  matches: `${MOBILE_SITE_URL}/maclar`,
  events: `${MOBILE_SITE_URL}/etkinlikler`,
  live: `${MOBILE_SITE_URL}/canli`,
  news: `${MOBILE_SITE_URL}/duyurular`,
  info: `${MOBILE_SITE_URL}/bilgi`,
} as const;

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export const NAV_LINKS = [
  { href: ROUTES.home, key: "home" as const },
  { href: ROUTES.turnuva, key: "about" as const },
  { href: ROUTES.atdsk, key: "atdsk" as const },
  { href: PORTAL.events, key: "events" as const },
  { href: PORTAL.matches, key: "schedule" as const },
  { href: ROUTES.oyuncular, key: "players" as const },
  { href: ROUTES.deneyim, key: "experience" as const },
  { href: ROUTES.iletisim, key: "contact" as const },
] as const;

export const PAGE_PATHS = [
  ROUTES.home,
  ROUTES.atdsk,
  ROUTES.turnuva,
  ROUTES.oyuncular,
  ROUTES.mekan,
  ROUTES.deneyim,
  ROUTES.iletisim,
] as const;

/** Old one-page hashes → real routes or the live portal. */
export const HASH_REDIRECTS: Record<string, string> = {
  about: ROUTES.turnuva,
  players: ROUTES.oyuncular,
  venue: ROUTES.mekan,
  schedule: PORTAL.matches,
  experience: ROUTES.deneyim,
  contact: ROUTES.iletisim,
  tickets: `${ROUTES.iletisim}#tickets`,
  bilgi: PORTAL.info,
  news: PORTAL.news,
  club: ROUTES.atdsk,
  significance: ROUTES.turnuva,
  etkinlikler: PORTAL.events,
  events: PORTAL.events,
};
