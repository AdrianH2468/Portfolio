function manejarEnvioFormulario(e) {
    e.preventDefault();
    console.log("Manejar el envío", e);
}

const formulario = document.querySelector(".formcontato__form");
formulario.addEventListener("submit", manejarEnvioFormulario);
