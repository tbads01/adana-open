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
      <div className="relative h-[42svh] min-h-[280px] w-full md:h-[52svh]">
        <Image src={image} alt="" fill priority className={imageClassName} sizes="100vw" />
      </div>
      <div className="section-pad mx-auto max-w-[1180px] py-10 md:py-14">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
          {title} {accent ? <em className="font-normal">{accent}</em> : null}
        </h1>
        {lead ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60">{lead}</p> : null}
      </div>
    </section>
  );
}
