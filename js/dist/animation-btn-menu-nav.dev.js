"use strict";

function animationBtnMenu(button) {
  // Remueve la clase de todos los botones
  var botones = document.querySelectorAll(".btn-menu-item");
  botones.forEach(function (btn) {
    btn.classList.remove("btn-menu-item--active");
  }); // Agrega la clase al botón actual

  button.classList.add("btn-menu-item--active");
}