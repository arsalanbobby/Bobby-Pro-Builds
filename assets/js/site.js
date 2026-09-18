document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".quick-menu-toggle");
  const backdrop = document.querySelector("[data-backdrop]");
  const menu = document.querySelector("#quick-menu");
  const lightbox = document.querySelector("#lightbox");

  function closeMenu() {
    if (menu) { menu.classList.remove("open"); menu.setAttribute("aria-hidden", "true"); }
    if (backdrop) backdrop.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("panel-open");
  }
  function openMenu() {
    if (!menu) return;
    menu.classList.add("open"); menu.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.classList.add("open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("panel-open");
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("panel-open");
  }

  if (toggle) toggle.addEventListener("click", () => menu && menu.classList.contains("open") ? closeMenu() : openMenu());
  if (backdrop) backdrop.addEventListener("click", closeMenu);
  document.querySelectorAll(".panel-close, .mobile-panel-nav a").forEach(item => item.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-gallery-src]").forEach(button => button.addEventListener("click", () => {
    if (!lightbox) return;
    const image = lightbox.querySelector("img");
    image.src = button.dataset.gallerySrc; image.alt = button.dataset.galleryAlt || "Completed project";
    lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden", "false"); document.body.classList.add("panel-open");
  }));
  const lightboxClose = document.querySelector(".lightbox-close");
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") { closeMenu(); closeLightbox(); } });
});
