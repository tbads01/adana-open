import type { ComponentType, SVGProps } from "react";
import { VectorCover } from "./VectorCover";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export function PageMasthead({
  eyebrow,
  title,
  accent,
  lead,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  icon?: IconType;
}) {
  return (
    <VectorCover className="min-h-[200px] md:min-h-[240px]">
      <div className="relative h-[28svh] min-h-[200px] w-full md:h-[34svh] md:min-h-[240px]">
        {Icon ? (
          <Icon className="pointer-events-none absolute right-6 bottom-8 h-28 w-28 text-yellow/25 md:right-14 md:h-36 md:w-36" />
        ) : null}
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-4 pb-7 md:px-8 md:pb-10">
          <div className="max-w-3xl text-paper">
            {eyebrow ? (
              <p className="text-[0.68rem] font-bold tracking-[0.18em] text-yellow uppercase">{eyebrow}</p>
            ) : null}
            <h1 className="mt-2 font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              {title}
              {accent ? <span> {accent}</span> : null}
            </h1>
            {lead ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/75 md:text-base">{lead}</p> : null}
          </div>
        </div>
      </div>
    </VectorCover>
  );
}
