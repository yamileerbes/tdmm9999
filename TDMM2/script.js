// Detectar si estamos en index.html (donde está el formulario)
const nombre = document.getElementById("name");
const mail = document.getElementById("mail");
const select = document.getElementById("pais");
const enviar = document.getElementById("enviar");

if (enviar) {
  enviar.addEventListener("click", enviarForm);

  function enviarForm(event) {
    event.preventDefault();
    console.log("¡CLICK!");

    // Obtener valores del formulario
    const vnombre = nombre.value;
    const vmail = mail.value;
    const vselect = select.value;
    console.log(vnombre, vmail, vselect);

    // Guardar en localStorage
    localStorage.setItem("nombreUsuario", vnombre);
    localStorage.setItem("mailUsuario", vmail);
    localStorage.setItem("paisUsuario", vselect);

    // Redirigir a la página de agradecimiento
    window.location.href = "agradecimiento.html";
  }
}

// Mostrar u ocultar el formulario de opciones
const btnMostrar = document.getElementById("mostrar");
if (btnMostrar) {
  btnMostrar.addEventListener("click", function () {
    const form = document.getElementById("formularioOpciones");
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
}

// Cuando carga cualquier página
document.addEventListener("DOMContentLoaded", () => {
  // Si estamos en la página de agradecimiento
  const holdernombre = document.getElementById("acavanombre");
  const holdermail = document.getElementById("acavamail");

  if (holdernombre && holdermail) {
    // Recuperar datos del localStorage
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const mailUsuario = localStorage.getItem("mailUsuario");

    // Mostrar en los spans
    holdernombre.innerHTML = nombreUsuario || "Sin nombre";
    holdermail.innerHTML = mailUsuario || "Sin mail";
  }

  // Esto evita que se recargue la página si hay un form con id="miFormulario"
  const formulario = document.getElementById("miFormulario");
  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Por si acaso
    });
  }
});