const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-area2");


const matrizCodigo = {
  e: "enter",
  i: "imes",
  o: "ober",
  a: "ai",
  u: "ufat"
};


function encryptButton() {
  const textoEncriptado = encrypt(textArea.value)
  console.log(textoEncriptado);
  return textoEncriptado;
}


function encrypt(stringEncriptada) {

  for (const key in matrizCodigo) {
    const regex = new RegExp(key, "g");
    stringEncriptada = stringEncriptada.replace(regex, matrizCodigo[key]);
  }
  return stringEncriptada
}

console.log(encryptButton(textArea));




