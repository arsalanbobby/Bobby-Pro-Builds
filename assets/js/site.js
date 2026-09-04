document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".site-nav");

  if (button && menu) {
    button.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
  }

  const modal = document.querySelector(".gallery-modal");
  const modalContent = document.querySelector(".gallery-dialog-content");
  const close = document.querySelector(".modal-close");

  document.querySelectorAll(".project-image").forEach((item) => {
    item.addEventListener("click", () => {
      if (!modal || !modalContent) return;
      const src = item.getAttribute("data-full");
      const label = item.getAttribute("data-label") || "Project image";
      modalContent.innerHTML = src
        ? '<img src="' + src + '" alt="' + label.replace(/"/g, "&quot;") + '">'
        : '<div class="placeholder-modal">Project photos coming soon</div>';
      modal.classList.add("open");
    });
  });

  const closeModal = () => modal && modal.classList.remove("open");
  if (close) close.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});