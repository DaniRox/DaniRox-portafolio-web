"use strict";

var btnContactame = document.getElementById("btn-contactame");
var btnContacto = document.getElementById("btn-contacto");

function contactame() {
  btnContacto.classList.add("btn-menu-item--active");
}

btnContactame.addEventListener("click", contactame);