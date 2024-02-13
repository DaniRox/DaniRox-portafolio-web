// Obtengo todas las card para trabajar en cada una"
const cardsWorks = document.querySelectorAll(".card-project--work");

// Itero sobre cada elemento y asigno los eventos
cardsWorks.forEach(function(cardWork) {
    const imgWork = cardWork.querySelector(".div-img-project--work");
    const btnsWork = cardWork.querySelector(".div-btn-project--work");
    const textWork = cardWork.querySelector(".div-txt-card-project--work");

    // Asigno los eventos a cada elemento
    cardWork.addEventListener("mouseover", showTxt);
    cardWork.addEventListener("mouseout", hideTxt);

    function showTxt() {
        textWork.style.height = "100%";
        textWork.style.padding = "1rem";
        imgWork.style.height = "0%";
    }

    function hideTxt() {
        textWork.style.height = "0%";
        textWork.style.padding = "0rem";
        imgWork.style.height = "100%";
    }

    
    textWork.style.transition = "height 0.7s ease-in-out, padding 0.7s ease-in-out";
    imgWork.style.transition = "height 0.7s ease-in-out";
});


