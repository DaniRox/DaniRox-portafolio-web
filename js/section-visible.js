function determineVisibleSection() {
    var sections = document.querySelectorAll("section"); // Ajusta el selector según tu estructura HTML
    var windowHeight = window.innerHeight;

    for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
            return sections[i].id;
        }
    }

    return null; // Retorna null si no se encuentra ninguna sección visible
}


function addActiveClassToMenu() {
    var visibleSection = determineVisibleSection();

    if (visibleSection) {
        var buttons = document.querySelectorAll(".btn-menu-item");
        buttons.forEach(function(button) {
            if (button.dataset.section === visibleSection) {
                button.classList.add("btn-menu-item--active");
            } else {
                button.classList.remove("btn-menu-item--active");
            }
        });
    }
}



window.addEventListener("scroll", function() {
    addActiveClassToMenu();
});