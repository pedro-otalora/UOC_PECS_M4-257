// MENÚ HAMBURGUESA
// se ejecuta cuando todo el html está cargado
document.addEventListener("DOMContentLoaded", function () {

  // guarda la referencia de los selectores del botón y lista de enlaces
  const menuBtn = document.querySelector(".menu-movil-toggle");
  const menuLista = document.querySelector(".menu-links");

  // se ejecuta cuando se pincha en el botón hamburguesa
  menuBtn.addEventListener("click", function (e) {
    // que el evento del click no pase a document
    e.stopPropagation();
    // añade o quita la subclase para cambiar el display la lista
    menuLista.classList.toggle("menu-open");
  });

  // se ejecuta al pinchar fuera del botón
  document.addEventListener("click", function () {
    // quita la subclase para volver al display none
    menuLista.classList.remove("menu-open");
  });
});

// PASA LA PÁGINA ACTUAL A aria-current
// ejecuta en cada elemento de la lista del menú
document.querySelectorAll('.menu-links a').forEach(link => {
  // si el link del selector es igual que la url de la página 
  if (link.href === window.location.href) {
    // añade el atributo aria-current al enlace 
    link.setAttribute('aria-current', 'page');
  }
});

// MODAL GALERÍA
document.addEventListener("click", (e) => {
  // Detectamos si el click es en una figura de la galería
  const figure = e.target.closest(".galeria-figure");
  
  if (figure) {
    const imgMiniatura = figure.querySelector(".galeria-img");
    const sourceWebP = figure.querySelector("source");
    
    const modal = document.querySelector(".modal-galeria");
    const modalImg = modal.querySelector(".modal-img");

    // 1. Copiamos el ALT para mantener la accesibilidad
    modalImg.alt = imgMiniatura.alt;

    /**
     * CLAVE PARA LA P2 (Módulo 3): 
     * Al pasar de una miniatura a pantalla completa, el contexto cambia.
     * Actualizamos 'sizes' a un valor grande (90vw) ANTES de asignar el srcset
     * para que el navegador elija la imagen de alta resolución inmediatamente.
     */
    modalImg.sizes = "90vw"; 

    // 2. Copiamos el srcset del source (que contiene las rutas procesadas por Sharp)
    if (sourceWebP && sourceWebP.srcset) {
      modalImg.srcset = sourceWebP.srcset;
    }

    // 3. Actualizamos el SRC como fallback (siempre después del srcset)
    modalImg.src = imgMiniatura.src;

    // 4. Mostramos el modal y bloqueamos el scroll del fondo
    modal.classList.add("mostrar");
    document.body.style.overflow = "hidden";
  }

  // Cierre del modal (al hacer click en la X o fuera de la imagen)
  if (
    e.target.classList.contains("modal-cerrar") ||
    e.target.classList.contains("modal-galeria") 
  ) {
    const modal = document.querySelector(".modal-galeria");
    const modalImg = modal.querySelector(".modal-img");

    modal.classList.remove("mostrar");
    document.body.style.overflow = "";

    // Limpiamos los atributos al cerrar para evitar el "flash" de la imagen anterior
    // al abrir una nueva y para resetear el estado del navegador.
    modalImg.srcset = "";
    modalImg.sizes = "";
  }
});