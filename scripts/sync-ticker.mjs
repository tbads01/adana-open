import { readFileSync, writeFileSync } from "node:fs";

const data = JSON.parse(readFileSync(new URL("../src/lib/players.json", import.meta.url), "utf8"));
const players = [...data.mainDraw]
  .map((p) => ({
    id: p.id,
    firstName: p.firstName,
    lastName: p.lastName,
    country: p.country,
    rank: p.rank ?? null,
  }))
  .sort((a, b) => {
    const ar = a.rank && a.rank > 0 ? a.rank : 9999;
    const br = b.rank && b.rank > 0 ? b.rank : 9999;
    return ar - br;
  });

writeFileSync(new URL("../src/lib/ticker.json", import.meta.url), JSON.stringify(players));
