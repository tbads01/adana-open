"use client";

import { LanguageProvider } from "@/lib/i18n";
import { FactsProvider } from "@/lib/facts-context";
import type { SharedFacts } from "@/lib/facts";
import type { ReactNode } from "react";
import { ContestLaunchDialog } from "./ContestPromo";

export function Providers({ children, facts }: { children: ReactNode; facts: SharedFacts }) {
  return (
    <LanguageProvider>
      <FactsProvider facts={facts}>
        {children}
        <ContestLaunchDialog />
      </FactsProvider>
    </LanguageProvider>
  );
}
