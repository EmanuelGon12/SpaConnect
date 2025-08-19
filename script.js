document.addEventListener("DOMContentLoaded", function() {
    function revealAnimados() {
        document.querySelectorAll('.animado').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealAnimados);
    revealAnimados();
});