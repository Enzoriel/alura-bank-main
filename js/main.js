import esUnCuil from "./validarCuil.js";
import esMayorEdad from "./validarEdad.js";

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
});

function verificarCampo(campo) {
  if (campo.name == "cuil" && campo.value.length >= 11) {
    esUnCuil(campo);
  }
  if (campo.name == "fecha_nacimiento" && campo.value != "") {
    esMayorEdad(campo);
  }
}
