import Image from "next/image";

export function PageMasthead({
  eyebrow,
  title,
  accent,
  lead,
  image,
  imageClassName = "object-cover",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  image: string;
  imageClassName?: string;
}) {
  return (
    <section className="bg-paper">
      <div className="relative h-[36svh] min-h-[240px] w-full md:h-[44svh]">
        <Image src={image} alt="" fill priority className={imageClassName} sizes="100vw" />
        <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow" />
      </div>
      <div className="section-pad mx-auto max-w-[1200px] py-8 md:py-11">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
          {title} {accent ? <span>{accent}</span> : null}
        </h1>
        {lead ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65">{lead}</p> : null}
      </div>
    </section>
  );
}
