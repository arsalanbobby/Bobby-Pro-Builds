document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".quick-menu-toggle");
  const backdrop = document.querySelector("[data-backdrop]");
  const menu = document.querySelector("#quick-menu");
  const gallery = document.querySelector("#gallery-panel");
  const contact = document.querySelector("#contact-panel");
  const panels = [menu, gallery, contact].filter(Boolean);
  const navDropdown = document.querySelector(".nav-dropdown");
  const navDropdownToggle = document.querySelector(".nav-dropdown-toggle");

  function closeNavDropdown() {
    if (!navDropdown || !navDropdownToggle) return;
    navDropdown.classList.remove("open");
    navDropdownToggle.setAttribute("aria-expanded", "false");
  }

  function closeAll() {
    closeNavDropdown();
    panels.forEach(panel => {
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
    });
    if (backdrop) backdrop.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("panel-open");
  }

  function openPanel(panel) {
    closeAll();
    if (!panel) return;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.classList.add("open");
    if (toggle && panel === menu) toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("panel-open");
  }

  if (navDropdownToggle && navDropdown) {
    navDropdownToggle.addEventListener("click", event => {
      event.stopPropagation();
      const willOpen = !navDropdown.classList.contains("open");
      closeNavDropdown();
      if (willOpen) {
        navDropdown.classList.add("open");
        navDropdownToggle.setAttribute("aria-expanded", "true");
      }
    });
    navDropdown.addEventListener("click", event => event.stopPropagation());
    document.addEventListener("click", closeNavDropdown);
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      if (menu && menu.classList.contains("open")) closeAll();
      else openPanel(menu);
    });
  }

  document.querySelectorAll(".panel-close").forEach(btn => btn.addEventListener("click", closeAll));
  document.querySelectorAll(".js-gallery-open").forEach(btn => btn.addEventListener("click", () => openPanel(gallery)));
  document.querySelectorAll(".js-contact-open").forEach(btn => btn.addEventListener("click", () => openPanel(contact)));
  if (backdrop) backdrop.addEventListener("click", closeAll);
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeAll(); });
  document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", closeAll));

  const pageShell = document.querySelector(".page-shell");
  function fitWholePage() {
    if (!pageShell) return;
    if (window.innerWidth <= 900) {
      pageShell.style.transform = "";
      pageShell.style.left = "";
      pageShell.style.top = "";
      return;
    }
    const designWidth = 1366;
    const designHeight = 706;
    const scale = Math.min(window.innerWidth / designWidth, window.innerHeight / designHeight);
    pageShell.style.transform = `scale(${scale})`;
    pageShell.style.left = `${Math.max(0, (window.innerWidth - designWidth * scale) / 2)}px`;
    pageShell.style.top = `${Math.max(0, (window.innerHeight - designHeight * scale) / 2)}px`;
  }
  fitWholePage();
  window.addEventListener("resize", fitWholePage);
});