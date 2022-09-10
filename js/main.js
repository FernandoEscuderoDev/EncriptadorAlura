const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const textoEscondido = document.getElementById("textoAside");
const textoEncriptado = document.querySelector(".encriptado");
const ocultar = document.querySelector(".articleMostrado");
const mostrar = document.querySelector(".articleEscondido");
let palabrasCodificada

function copiar() {
  textoEscondido.select();
  textoEscondido.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textoEscondido.value);
}
function mostrarResultado(estado) {
  mostrar.style = "display: flex;";
  ocultar.style = "display:none;";
  textoEscondido.innerHTML = estado
}

function codificador() {
  palabra = Array.from(textoEncriptado.value.toLowerCase());
  palabrasCodificada = palabra.map((letra) => {
    switch (letra) {
      case "a":
        return (letra = "ai");
      case "e":
        return (letra = "enter");
      case "i":
        return (letra = "imes");
      case "o":
        return (letra = "ober");
      case "u":
        return (letra = "ufat");
      default:
        return letra;
    }
    return letra;
  });
  palabrasCodificada = palabrasCodificada.toString().replaceAll(",", "");
  return mostrarResultado(palabrasCodificada);
}

const desencriptar = () => {
  let estado = textoEncriptado.value.toLowerCase();
  let palabra = estado;
  palabra = palabra.replaceAll("ai", "a");
  palabra = palabra.replaceAll("enter", "e");
  palabra = palabra.replaceAll("imes", "i");
  palabra = palabra.replaceAll("ober", "o");
  palabra = palabra.replaceAll("ufat", "u");
  return mostrarResultado(palabra);
};

