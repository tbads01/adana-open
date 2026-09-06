export function goHomeSection(href: string) {
  if (typeof window === "undefined") return;
  if (window.location.pathname === "/") {
    const id = href.replace("/#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
    return;
  }
  window.location.assign(href);
}
