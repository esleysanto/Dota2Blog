document.addEventListener("DOMContentLoaded", function() {

  // Crear el modal
  const modal = document.createElement("div");
  modal.id = "img-modal";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.85)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";
  modal.style.opacity = "0";     // ← empieza invisible
  modal.style.visibility = "hidden"; // ← no clickeable al inicio
  modal.style.transition = "opacity .3s ease"; // ← transición suave

  const modalImg = document.createElement("img");
  modalImg.style.maxWidth = "90%";
  modalImg.style.maxHeight = "90%";
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  // Ampliar imagen
  document.querySelectorAll("img").forEach(function(img) {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function() {
      modalImg.src = img.src;
      modal.style.visibility = "visible";
      modal.style.opacity = "1"; // ← aparece suave
    });
  });

  // Cerrar al click
  modal.addEventListener("click", function() {
    modal.style.opacity = "0"; // ← desaparece suave
    setTimeout(() => {
      modal.style.visibility = "hidden"; 
    }, 300);
  });

});
