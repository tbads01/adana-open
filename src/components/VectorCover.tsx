import type { ReactNode } from "react";

export function CourtLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 780 360"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="miter">
        <rect x="40" y="28" width="700" height="304" />
        <rect x="40" y="72" width="700" height="216" />
        <line x1="390" y1="28" x2="390" y2="332" />
        <line x1="214" y1="72" x2="214" y2="288" />
        <line x1="566" y1="72" x2="566" y2="288" />
        <line x1="214" y1="180" x2="566" y2="180" />
        <line x1="40" y1="180" x2="70" y2="180" />
        <line x1="710" y1="180" x2="740" y2="180" />
      </g>
      <line x1="390" y1="28" x2="390" y2="332" stroke="#F8C828" strokeWidth="3.4" />
    </svg>
  );
}

export function VectorCover({
  className = "",
  patternClassName = "absolute -right-[12%] -top-[18%] h-[140%] w-[85%] text-white/18",
  children,
}: {
  className?: string;
  patternClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-ink ${className}`}>
      <CourtLines className={patternClassName} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/15" />
      {children}
      <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow" />
    </div>
  );
}
