const menu = document.getElementById("nav");
const menuNav = document.getElementById("menu-nav");
const btnMenu = document.getElementById("btn-menu-nav");


function displayMenu(){
    if(menuNav.style.display === "flex"){
        menuNav.style.display = "none";
        menu.style.height = "4.5rem";
    } else {
        menuNav.style.display = "flex";
        menu.style.height = "15rem";
    }
}

btnMenu.addEventListener("click", displayMenu);

function displayMenuDesktop(){
    if(menuNav.style.display === "flex"){
        menuNav.style.display = "none";
        menu.style.height = "4.5rem";
    }
}