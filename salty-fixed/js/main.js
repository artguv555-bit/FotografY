// ---------------------------------------------
// Мобильное меню
// ---------------------------------------------
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  // Закрывать меню при переходе по ссылке
  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------------------------------------
// Лайтбокс для портфолио
// ---------------------------------------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const portfolioGrid = document.getElementById("portfolioGrid");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

if (portfolioGrid) {
  portfolioGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".portfolio__item");
    if (!item) return;
    const img = item.querySelector("img");
    openLightbox(item.dataset.full || img.src, img.alt);
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ---------------------------------------------
// Форма обратной связи
// ---------------------------------------------
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const way = contactForm["contact-way"].value.trim();

    if (!name || !way) {
      formStatus.textContent = "Заполните имя и способ связи.";
      return;
    }

    // Здесь можно подключить реальную отправку (fetch на сервер, Telegram-бот и т.д.)
    formStatus.textContent = "Спасибо! Сообщение отправлено, скоро свяжусь с вами.";
    contactForm.reset();
  });
}

// ---------------------------------------------
// Тень у шапки при прокрутке
// ---------------------------------------------
const header = document.getElementById("header");

function updateHeaderState() {
  if (!header) return;
  header.style.borderBottomColor =
    window.scrollY > 8 ? "rgba(243, 238, 228, 0.28)" : "rgba(243, 238, 228, 0.14)";
}
window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();
