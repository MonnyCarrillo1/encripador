const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-area2");
const imagen = document.querySelector(".muñeco");
const p = document.querySelector(".mensaje1");

// FUNCION PARA ENCRIPTAR
const encryptText = (text) => {
  let encryptedText = text.replace(/e/g, "enter");
  encryptedText = encryptedText.replace(/i/g, "imes");
  encryptedText = encryptedText.replace(/a/g, "ai");
  encryptedText = encryptedText.replace(/o/g, "ober");
  encryptedText = encryptedText.replace(/u/g, "ufat");
  return encryptedText;
}

// FUNCION PARA DESENCRIPTAR
const decryptText = (text) => {
  let decryptedText = text.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");
  return decryptedText;
}

document.querySelector("#encryptButton").addEventListener("click", () => {
  const inputText = textArea.value.toLowerCase();
  const encryptedText = encryptText(inputText);

  
  p.innerHTML = encryptedText
  imagen.style.display = 'none';
  mensaje.innerHTML = "";
  
  // mostrar el resultado
  resultArea.style.display = "block";
});

// AÑADIR FUNCION AL BOTON DESCENCRIPTAR
document.querySelector("#decryptButton").addEventListener("click", () => {
  const inputText = textArea.value.toLowerCase();
  const decryptedText = decryptText(inputText);

 
  p.innerHTML = decryptedText
  imagen.style.display = 'none';
  mensaje.innerHTML = "";
  

  // mostrar el resultado
  resultArea.style.display = "block";
});

// DEFINIR EL BOTON PARA COPIAR
const copyBtn = document.getElementById('copyButton');

// AÑADIR FUNCION AL BOTON 
copyBtn.addEventListener('click', () => {
    const resultArea = document.getElementById('result');
    const resultText = resultArea.innerText;
    navigator.clipboard.writeText(resultText);
    alert("Texto copiado al portapapeles");
});
