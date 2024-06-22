export default function esUnCuil(campo) {
  const cuil = campo.value.replace(/[-\/]/g, "");
  tieneNumRepetidos(cuil);

  if (tieneNumRepetidos(cuil)) {
    console.log("Hay numeros repetidos, no te pases de verga");
  } else if (validarDigitoVerificador(cuil) && validarPrimDigitos(cuil)) {
    console.log("Cuil válido, crack, pasá que te esperamos en la sala VIP");
  } else {
    console.log("Este cuil no existe, te quisiste hacer el gracioso y sos tremendo pelotudo");
  }
}

function tieneNumRepetidos(cuil) {
  const numRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return numRepetidos.includes(cuil);
}

function validarPrimDigitos(cuil) {
  let primerosDigitos = cuil.substr(0, 2);
  const digitosValidos = ["20", "23", "24", "27", "30", "33", "34"];

  return digitosValidos.includes(primerosDigitos);
}

function validarDigitoVerificador(cuil) {
  const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let acumulado = 0;

  for (let i = 0; i < 10; i++) {
    acumulado += parseInt(cuil[i], 10) * factores[i];
  }

  console.log(`Este es el acumulado: ${acumulado}`);
  let verificadorTeorico = 11 - (acumulado % 11);
  console.log(`Este es el verificador teórico ${verificadorTeorico}`);

  if (verificadorTeorico === 10) {
    verificadorTeorico = 9;
  } else if (verificadorTeorico === 11) {
    verificadorTeorico = 0;
  }

  console.log(`Este es el resultado del verificador teorico ${verificadorTeorico}`);

  const digitoVerificador = parseInt(cuil[10], 10);
  return digitoVerificador === verificadorTeorico;
}
