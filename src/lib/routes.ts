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

export const NAV_LINKS = [
  { href: ROUTES.program, key: "schedule" as const },
  { href: ROUTES.oyuncular, key: "players" as const },
  { href: ROUTES.mekan, key: "venue" as const },
  { href: ROUTES.atdsk, key: "atdsk" as const },
] as const;

export const MORE_LINKS = [
  { href: ROUTES.turnuva, key: "about" as const },
  { href: ROUTES.deneyim, key: "experience" as const },
] as const;

export const PAGE_PATHS = [
  ROUTES.home,
  ROUTES.atdsk,
  ROUTES.turnuva,
  ROUTES.oyuncular,
  ROUTES.mekan,
  ROUTES.program,
  ROUTES.deneyim,
  ROUTES.iletisim,
] as const;

/** Old one-page hashes → real routes. */
export const HASH_REDIRECTS: Record<string, string> = {
  about: ROUTES.turnuva,
  players: ROUTES.oyuncular,
  venue: ROUTES.mekan,
  schedule: ROUTES.program,
  experience: ROUTES.deneyim,
  contact: ROUTES.iletisim,
  tickets: ROUTES.iletisim,
  club: ROUTES.atdsk,
  significance: ROUTES.turnuva,
};
