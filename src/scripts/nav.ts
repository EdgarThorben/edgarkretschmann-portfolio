/**
 * Mobile hamburger toggle for the sticky site nav. The menu `<ul>` is
 * `display: flex` by default and only collapsed below the mobile breakpoint
 * (via CSS), so the nav works with CSS alone above that breakpoint. Below
 * it, this script toggles the `is-open` class to reveal the menu.
 */

function initNavToggle() {
  const nav = document.querySelector<HTMLElement>(".site-nav");
  const toggle = document.getElementById("site-nav-toggle");
  const menu = document.getElementById("site-nav-menu");
  if (!nav || !toggle || !menu) return;

  function isOpen() {
    return toggle!.getAttribute("aria-expanded") === "true";
  }

  function closeMenu() {
    nav!.classList.remove("is-open");
    toggle!.setAttribute("aria-expanded", "false");
    menu!.classList.remove("is-open");
  }

  function openMenu() {
    nav!.classList.add("is-open");
    toggle!.setAttribute("aria-expanded", "true");
    menu!.classList.add("is-open");
  }

  toggle.addEventListener("click", () => {
    isOpen() ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (isOpen() && !nav!.contains(event.target as Node)) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (isOpen() && window.innerWidth > 640) closeMenu();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavToggle);
} else {
  initNavToggle();
}
