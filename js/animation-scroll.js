document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var elementosAnimar = document.querySelectorAll(".animated-element");

        elementosAnimar.forEach(function(elemento) {
            if (esVisible(elemento)) {
                elemento.classList.add("show");
            }
        });
    });
    
    // Función para verificar si un elemento es visible en la ventana
    function esVisible(elemento) {
        var rect = elemento.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight;
    }
});