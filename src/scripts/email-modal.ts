/**
 * Mailto links silently no-op when the browser has no default mail client
 * configured, which reads as a broken button. Intercept every mailto: click
 * site-wide and open a dialog with a real message form (posts to
 * /api/contact) instead, plus a fallback link that still attempts the real
 * mailto: navigation (preserving any subject/body query params).
 */

function initEmailModal() {
  const dialog = document.getElementById("email-modal") as HTMLDialogElement | null;
  const form = document.getElementById("email-modal-form") as HTMLFormElement | null;
  const status = document.getElementById("email-modal-status");
  const openLink = document.getElementById("email-modal-open") as HTMLAnchorElement | null;
  if (!dialog || !form || !status || !openLink) return;

  const sendingText = dialog.dataset.sending ?? "Sending…";
  const successText = dialog.dataset.success ?? "Sent.";
  const errorText = dialog.dataset.error ?? "Something went wrong.";

  document.addEventListener("click", (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="mailto:"]');
    if (!link || link.id === "email-modal-open") return;
    event.preventDefault();

    openLink.href = link.href;
    form.reset();
    status.textContent = "";
    dialog.showModal();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = sendingText;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      status.textContent = successText;
      form.reset();
    } catch {
      status.textContent = errorText;
    }
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
