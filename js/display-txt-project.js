// Obtengo todas las card para trabajar en cada una"
const cardsProjects = document.querySelectorAll(".card-project");

// Itero sobre cada elemento y asigno los eventos
cardsProjects.forEach(function(cardProject) {
    const imgProject = cardProject.querySelector(".div-img-project");
    const btnsProject = cardProject.querySelector(".div-btn-project");
    const textProject = cardProject.querySelector(".div-txt-card-project");

    // Asigno los eventos a cada elemento
    cardProject.addEventListener("mouseover", showTxt);
    cardProject.addEventListener("mouseout", hideTxt);

    function showTxt() {
        textProject.style.height = "100%";
        imgProject.style.height = "auto";
    }

    function hideTxt() {
        textProject.style.height = "40%";
        imgProject.style.height = "60%";
    }

    
    textProject.style.transition = "height 0.7s ease-in-out";
    imgProject.style.transition = "height 0.7s ease-in-out";
});