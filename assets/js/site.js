document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".quick-menu-toggle");
  const backdrop = document.querySelector("[data-panel-backdrop]");
  const menu = document.querySelector("#quick-menu");
  const gallery = document.querySelector("#gallery-panel");
  const contact = document.querySelector("#contact-panel");
  const panels = [menu, gallery, contact].filter(Boolean);

  const closeAll = () => {
    panels.forEach(panel => {
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
    });
    if (backdrop) backdrop.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("panel-open");
  };

  const openPanel = (panel) => {
    closeAll();
    if (!panel) return;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.classList.add("open");
    if (toggle && panel === menu) toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("panel-open");
  };

  if (toggle) toggle.addEventListener("click", () => {
    const isOpen = menu && menu.classList.contains("open");
    isOpen ? closeAll() : openPanel(menu);
  });

  document.querySelectorAll(".panel-close").forEach(btn => btn.addEventListener("click", closeAll));
  document.querySelectorAll(".js-gallery-open").forEach(btn => btn.addEventListener("click", () => openPanel(gallery)));
  document.querySelectorAll(".js-contact-open").forEach(btn => btn.addEventListener("click", () => openPanel(contact)));
  if (backdrop) backdrop.addEventListener("click", closeAll);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });
  document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", closeAll));
});