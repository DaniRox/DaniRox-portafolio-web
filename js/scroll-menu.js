function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if(section) {
        // Calcula la posición de la sección en relación con la ventana
        const offset = section.getBoundingClientRect().top + window.scrollY;

        // Realiza el desplazamiento suave
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    }
}
