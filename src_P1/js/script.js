// MENÚ HAMBURGUESA
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-movil-toggle");
  const menuDesktop = document.querySelector(".menu-links");

  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menuDesktop.classList.toggle("menu-open");
  });

  // Cerrar al clic fuera
  document.addEventListener("click", function () {
    menuDesktop.classList.remove("menu-open");
  });
});

// MODAL GALERÍA
document.addEventListener("click", (e) => {
  if (e.target.closest(".galeria-figure")) {
    const img = e.target
      .closest(".galeria-figure")
      .querySelector(".galeria-img");
    const modal = e.target.closest(".galeria").querySelector(".modal-galeria");
    modal.querySelector(".modal-img").src = img.src;
    modal.querySelector(".modal-img").alt = img.alt;
    modal.classList.add("mostrar");
    document.body.style.overflow = "hidden";
  }
  if (
    e.target.classList.contains("modal-cerrar") ||
    e.target.classList.contains("modal-galeria") 
  ) {
    e.target.closest(".modal-galeria").classList.remove("mostrar");
    document.body.style.overflow = "";
  }
});

// PASA LA PÁGINA ACTUAL A aria-current
document.querySelectorAll('.menu-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});