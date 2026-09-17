import { MekanPage } from "@/components/inner-pages";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta(
  "/mekan",
  "Mekan",
  "Adana Open, ATDSK’nin Seyhan Baraj Gölü kıyısındaki tesislerinde oynanır. 16 kort ve uluslararası standartta altyapı.",
);

export default function Page() {
  return <MekanPage />;
}
