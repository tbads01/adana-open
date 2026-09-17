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
    <section className="relative isolate min-h-[40svh] overflow-hidden bg-void md:min-h-[46svh]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className={imageClassName}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/55 to-void/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/35" />
      </div>
      <div className="section-pad relative mx-auto flex min-h-[40svh] max-w-[1400px] flex-col justify-end pb-10 pt-28 md:min-h-[46svh] md:pb-14">
        {eyebrow ? (
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.22em] text-yellow uppercase">
            <span className="h-px w-8 bg-yellow" />
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.15rem,5.2vw,4.2rem)] font-bold leading-[0.94] tracking-[-0.045em] text-white">
          {title}
          {accent ? <span className="mt-1 block font-semibold text-yellow">{accent}</span> : null}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
