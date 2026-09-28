import { redirect } from "next/navigation";
import { PORTAL } from "@/lib/routes";

export default function Page() {
  redirect(PORTAL.matches);
}
