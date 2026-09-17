"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HASH_REDIRECTS } from "@/lib/routes";

export function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const to = HASH_REDIRECTS[hash];
    if (to) router.replace(to);
  }, [router]);

  return null;
}
