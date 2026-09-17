import { TurnuvaPage } from "@/components/inner-pages";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta(
  "/turnuva",
  "Turnuva",
  "Adana Open, ATDSK ev sahipliğinde 115.000 USD ödüllü WTA 125 kadınlar tenis turnuvasıdır. 26 Eylül – 4 Ekim 2026, Adana.",
);

export default function Page() {
  return <TurnuvaPage />;
}
