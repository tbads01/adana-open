export function SectionHeading({
  eyebrow,
  title,
  accent,
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className={tone === "dark" ? "eyebrow eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2 className={`section-title mt-4 ${tone === "dark" ? "text-ink" : "text-paper"}`}>
        {title}
        {accent ? <span className="section-accent">{accent}</span> : null}
      </h2>
    </div>
  );
}
