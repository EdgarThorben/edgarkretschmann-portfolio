/**
 * Recreates the original Carrd sites' `data-onvisible-trigger` scroll-reveal
 * system (IntersectionObserver-driven fade/zoom, staggered per group) plus
 * their `data-scroll-speed` parallax on hero images. No external deps —
 * the original sites didn't use a smooth-scroll library either.
 */

function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (targets.length === 0) return;

  const groups = new Map<string, HTMLElement[]>();
  for (const el of targets) {
    const groupKey = el.dataset.revealGroup ?? el.dataset.reveal ?? "default";
    const list = groups.get(groupKey) ?? [];
    list.push(el);
    groups.set(groupKey, list);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const group = groups.get(el.dataset.revealGroup ?? el.dataset.reveal ?? "default") ?? [el];
        const indexInGroup = group.indexOf(el);
        const delay = Math.max(indexInGroup, 0) * 0.125;
        el.style.transitionDelay = `${delay}s`;
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  for (const el of targets) observer.observe(el);
}

function initParallax() {
  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-speed]"));
  if (targets.length === 0) return;

  let ticking = false;

  function update() {
    const viewportH = window.innerHeight;
    for (const el of targets) {
      const speed = Number(el.dataset.scrollSpeed ?? "0");
      if (!speed) continue;
      const rect = el.getBoundingClientRect();
      const distanceFromCenter = rect.top + rect.height / 2 - viewportH / 2;
      const offset = (distanceFromCenter / viewportH) * speed * 20;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    }
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initParallax();
  });
} else {
  initReveal();
  initParallax();
}
