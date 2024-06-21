import esUnCuil from "./validarCuil.js";

const camposFormmulario = document.querySelectorAll("[required]");

camposFormmulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
});

function verificarCampo(campo) {
  if (campo.name == "cuil" && campo.value.length >= 11) {
    esUnCuil(campo);
  }
}
