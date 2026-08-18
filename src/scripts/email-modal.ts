/**
 * Mailto links silently no-op when the browser has no default mail client
 * configured, which reads as a broken button. Intercept every mailto: click
 * site-wide and show a small dialog with the address (copyable) instead,
 * plus a fallback link that still attempts the real mailto: navigation
 * (preserving any subject/body query params from the original link).
 */

function initEmailModal() {
  const dialog = document.getElementById("email-modal") as HTMLDialogElement | null;
  const addressEl = document.getElementById("email-modal-address");
  const copyBtn = document.getElementById("email-modal-copy") as HTMLButtonElement | null;
  const openLink = document.getElementById("email-modal-open") as HTMLAnchorElement | null;
  if (!dialog || !addressEl || !copyBtn || !openLink) return;

  let copyResetTimer: ReturnType<typeof setTimeout> | null = null;

  document.addEventListener("click", (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="mailto:"]');
    if (!link) return;
    event.preventDefault();

    const email = decodeURIComponent(link.href.replace(/^mailto:/i, "").split("?")[0]);
    addressEl.textContent = email;
    openLink.href = link.href;
    copyBtn.textContent = "Copy email";
    dialog.showModal();
  });

  copyBtn.addEventListener("click", () => {
    const email = addressEl.textContent || "";
    if (!email || !navigator.clipboard) return;

    navigator.clipboard
      .writeText(email)
      .then(() => {
        copyBtn.textContent = "Copied!";
        if (copyResetTimer) clearTimeout(copyResetTimer);
        copyResetTimer = setTimeout(() => {
          copyBtn.textContent = "Copy email";
        }, 2000);
      })
      .catch(() => {});
  });

  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEmailModal);
} else {
  initEmailModal();
}
