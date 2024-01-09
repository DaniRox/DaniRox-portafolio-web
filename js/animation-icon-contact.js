const iconContact = document.querySelector(".icon-contact");
const icons = document.querySelectorAll(".icon-contact");



icons.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        elemento.classList.add("rotate-vert-center");
    });
});


icons.forEach(elemento => {
    elemento.addEventListener('mouseout', () => {
        elemento.classList.remove("rotate-vert-center");
    });
});
