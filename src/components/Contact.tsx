"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";
import { useFacts } from "@/lib/facts-context";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VectorCover } from "./VectorCover";
import { IconMail } from "./Icons";
import { TicketsLink } from "./TicketsLink";

function announcementHref(href?: string) {
  if (!href) return undefined;
  if (href.startsWith("http")) return href;
  if (href === "/maclar") return "/program#match-plan";
  if (href === "/etkinlikler") return "/program#etkinlikler";
  if (href === "/oyuncular") return "/oyuncular";
  if (href === "/bilgi") return "/iletisim";
  return href;
}

export function Contact() {
  const { t, locale } = useLanguage();
  const facts = useFacts();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <>
      <section id="tickets" className="bg-paper">
        <div className="section-pad mx-auto flex max-w-[1200px] flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:py-14">
          <div className="max-w-2xl">
            <SectionHeading tone="dark" title={t.tickets.title} accent={t.tickets.titleAccent || undefined} />
            <p className="mt-3 max-w-lg text-ink/60">{facts.ticketsBody[locale] || t.tickets.body}</p>
          </div>
          <TicketsLink className="btn btn-primary">{t.tickets.cta}</TicketsLink>
        </div>
      </section>

      {(facts.announcements?.length || facts.faqs?.length) ? (
        <section id="bilgi" className="border-t border-line-dark bg-paper py-16 md:py-20">
          <div className="section-pad mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
            {facts.announcements?.length ? (
              <div>
                <SectionHeading tone="dark" title={t.contact.newsTitle} />
                <ul className="mt-8 space-y-4">
                  {facts.announcements.map((item) => {
                    const href = announcementHref(item.href);
                    const body = (
                      <>
                        <p className="text-[0.62rem] font-bold tracking-[0.14em] text-ink/40 uppercase">
                          {item.tag[locale]}
                          <span className="mx-1.5 text-ink/20">·</span>
                          {item.date}
                        </p>
                        <p className="mt-2 font-display text-xl font-bold tracking-[-0.03em] text-ink">{item.title[locale]}</p>
                        <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.body[locale]}</p>
                      </>
                    );
                    return (
                      <li key={item.id} className="border border-line-dark bg-surface p-5">
                        {href ? (
                          <a href={href} className="block hover:opacity-80" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                            {body}
                          </a>
                        ) : (
                          body
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {facts.faqs?.length ? (
              <div>
                <SectionHeading tone="dark" title={t.contact.faqTitle} />
                <div className="mt-8 divide-y divide-line-dark border border-line-dark bg-surface">
                  {facts.faqs.map((item) => (
                    <details key={item.q.tr} className="group px-5 py-4">
                      <summary className="cursor-pointer list-none font-display text-base font-bold tracking-[-0.02em] text-ink">
                        {item.q[locale]}
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.a[locale]}</p>
                    </details>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section id="contact" className="border-t border-line-dark bg-paper py-16 md:py-24">
        <div className="section-pad mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                tone="dark"
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                accent={t.contact.titleAccent}
              />
              <p className="mt-4 max-w-lg text-ink/60">{t.contact.body}</p>

              <div className="mt-8 max-w-md">
                <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.16em] text-ink/40 uppercase">
                  {t.contact.notify}
                </p>
                {done ? (
                  <p className="border border-green/40 bg-green/10 px-5 py-3 text-sm font-medium text-green-deep">
                    {t.contact.submitted}
                  </p>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="min-w-0 flex-1 border border-line-dark bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-ink"
                    />
                    <button type="submit" className="btn btn-primary shrink-0">
                      {t.contact.submit}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="mailto:info@adanaopen.com" className="border border-line-dark bg-surface p-5">
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{t.contact.emailLabel}</p>
                  <p className="mt-2 text-sm text-ink">info@adanaopen.com</p>
                </a>
                <a
                  href="https://www.instagram.com/adana.open/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-line-dark bg-surface p-5"
                >
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">Instagram</p>
                  <p className="mt-2 text-sm text-ink">{t.contact.instagram}</p>
                </a>
                <a href="tel:+903222341155" className="border border-line-dark bg-surface p-5">
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{t.contact.phoneLabel}</p>
                  <p className="mt-2 text-sm text-ink">+90 322 234 11 55</p>
                </a>
                <div className="border border-line-dark bg-surface p-5">
                  <p className="text-[0.62rem] tracking-[0.16em] text-ink/40 uppercase">{t.contact.hostLabel}</p>
                  <p className="mt-2 text-sm text-ink">ATDSK</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <VectorCover className="min-h-[420px] h-full">
                <div className="relative flex min-h-[420px] items-end p-8 lg:min-h-full">
                  <IconMail className="pointer-events-none absolute right-6 top-8 h-28 w-28 text-yellow/20" />
                </div>
              </VectorCover>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
