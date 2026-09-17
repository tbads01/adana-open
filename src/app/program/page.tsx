import { ProgramPage } from "@/components/inner-pages";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta(
  "/program",
  "Program",
  "Adana Open 2026 maç takvimi ve gün gün program. Eleme 26–27 Eylül, ana tablo 28 Eylül – 4 Ekim.",
);

export default function Page() {
  return <ProgramPage />;
}
