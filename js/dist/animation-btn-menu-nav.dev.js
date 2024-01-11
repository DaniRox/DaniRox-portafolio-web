"use strict";

function animationBtnMenu(button) {
  // Remueve la clase de todos los botones
  var botones = document.querySelectorAll(".btn-menu-item");
  botones.forEach(function (btn) {
    btn.classList.remove("btn-menu-item--active");
  }); // Agrega la clase al botón actual

  button.classList.add("btn-menu-item--active");
}

function removeClass() {
  // Obtener el elemento al que deseas quitar la clase
  var btnHome = document.getElementById("btn-home"); // Reemplaza "tuElemento" con el ID de tu elemento
  // Verificar si el elemento tiene la clase antes de quitarla

  if (btnHome.classList.contains("btn-menu-item--active")) {
    // Eliminar la clase
    btnHome.classList.remove("btn-menu-item--active");
  }
}