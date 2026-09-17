import { IletisimPage } from "@/components/inner-pages";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta(
  "/iletisim",
  "İletişim",
  "Adana Open bilet, basın ve sponsorluk için iletişim. info@adanaopen.com · ATDSK, Adana.",
);

export default function Page() {
  return <IletisimPage />;
}
