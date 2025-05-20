document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Quando o elemento aparecer na tela

                entry.target.classList.add('visible');
                entry.target.classList.remove('fade-out');
            } else {

                // Quando o elemento sair da tela

                entry.target.classList.remove('visible');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1  // 10% do elemento visível para disparar
    });

    elements.forEach(el => observer.observe(el));
});