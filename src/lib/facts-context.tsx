"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SharedFacts } from "./facts";

const FactsContext = createContext<SharedFacts | null>(null);

export function FactsProvider({ facts, children }: { facts: SharedFacts; children: ReactNode }) {
  return <FactsContext.Provider value={facts}>{children}</FactsContext.Provider>;
}

export function useFacts() {
  const value = useContext(FactsContext);
  if (!value) throw new Error("useFacts must be used within FactsProvider");
  return value;
}
