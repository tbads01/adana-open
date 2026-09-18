import Image from "next/image";

const HERO = "/media/hero/adana-open-court.jpg";

export function PageMasthead({
  eyebrow,
  title,
  accent,
  lead,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="relative h-[32svh] min-h-[220px] w-full md:h-[40svh] md:min-h-[280px]">
        <Image
          src={HERO}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/25" />

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
        <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow" />
      </div>
    </section>
  );
}
