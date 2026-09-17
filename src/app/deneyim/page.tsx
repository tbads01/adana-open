import { DeneyimPage } from "@/components/inner-pages";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta(
  "/deneyim",
  "Deneyim",
  "Adana Open seyirci deneyimi: merkez kort, fan zone, food court, havuz kenarı ve sponsor alanları.",
);

export default function Page() {
  return <DeneyimPage />;
}
