/** Neutral world mark used where national flags are barred (RUS / BLR). */
export const WORLD_FLAG = "🌐";

const NEUTRAL_CODES = new Set(["RUS", "BLR"]);

export const FLAGS: Record<string, string> = {
  ARG: "🇦🇷",
  ARM: "🇦🇲",
  AND: "🇦🇩",
  BLR: WORLD_FLAG,
  CAN: "🇨🇦",
  COL: "🇨🇴",
  CRO: "🇭🇷",
  CZE: "🇨🇿",
  FRA: "🇫🇷",
  GEO: "🇬🇪",
  GER: "🇩🇪",
  HUN: "🇭🇺",
  ITA: "🇮🇹",
  LAT: "🇱🇻",
  NED: "🇳🇱",
  POL: "🇵🇱",
  RUS: WORLD_FLAG,
  SRB: "🇷🇸",
  SUI: "🇨🇭",
  TUR: "🇹🇷",
  USA: "🇺🇸",
};

export function countryLabel(code: string, world: string) {
  return NEUTRAL_CODES.has(code) ? world : code;
}
  ARG: "🇦🇷",
  ARM: "🇦🇲",
  AND: "🇦🇩",
  BLR: WORLD_FLAG,
  CAN: "🇨🇦",
  COL: "🇨🇴",
  CRO: "🇭🇷",
  CZE: "🇨🇿",
  FRA: "🇫🇷",
  GEO: "🇬🇪",
  GER: "🇩🇪",
  HUN: "🇭🇺",
  ITA: "🇮🇹",
  LAT: "🇱🇻",
  NED: "🇳🇱",
  POL: "🇵🇱",
  RUS: WORLD_FLAG,
  SRB: "🇷🇸",
  SUI: "🇨🇭",
  TUR: "🇹🇷",
  USA: "🇺🇸",
};
