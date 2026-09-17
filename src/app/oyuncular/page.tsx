import { OyuncularPage } from "@/components/inner-pages";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta(
  "/oyuncular",
  "Oyuncular",
  "Adana Open WTA 125 ana tablo oyuncu listesi. Türkiye’den isimler ve doğrudan kabul edilen oyuncular.",
);

export default function Page() {
  return <OyuncularPage />;
}
