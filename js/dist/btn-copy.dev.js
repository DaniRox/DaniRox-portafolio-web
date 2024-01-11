"use strict";

function copy() {
  // Seleccionar el span
  var spanContenido = document.getElementById("email"); // Crear un área de texto temporal

  var textareaTemp = document.createElement("textarea");
  textareaTemp.value = spanContenido.textContent; // Agregar el área de texto temporal al cuerpo del documento

  document.body.appendChild(textareaTemp); // Seleccionar y copiar el contenido del área de texto

  textareaTemp.select();
  document.execCommand("copy"); // Eliminar el área de texto temporal

  document.body.removeChild(textareaTemp); // Puedes agregar algún mensaje de éxito o manejo de errores aquí

  alert("Texto copiado al portapapeles");
}