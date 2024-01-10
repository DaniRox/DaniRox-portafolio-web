"use strict";

var menuItems = document.getElementsByClassName("txt-menu-nav");
var menu = document.getElementById("nav");
var menuNav = document.getElementById("menu-nav");
var btnMenu = document.getElementById("btn-menu-nav"); //función para mostrar/ocultar el menu en tamaño de pantalla menor a 770px

function displayMenu() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
    menu.style.height = "4.5rem";
  } else {
    menuNav.style.display = "flex";
    menu.style.height = "15rem";
  }
} //escuchador de evento para el boton menu que activa la funcion


btnMenu.addEventListener("click", displayMenu);