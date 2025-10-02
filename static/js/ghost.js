

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");

// Función para abrir/cerrar menú
function toggleMenu() {
    const isActive = navMenu.classList.toggle("active");
    hamburger.classList.toggle("active", isActive);
    overlay.classList.toggle("active", isActive);

    // Bloquear scroll cuando el menú esté abierto
    if (isActive) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

// Abrir/cerrar con hamburguesa o overlay
hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Cerrar menú al hacer clic en un enlace
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            toggleMenu();
        }
    });
});




//scrip de animacion de imagenes

const elements = document.querySelectorAll('.animate-center, .zoom-center, .animate-fade');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Deja de observar para que no se quite
        }
    });
}, {
    threshold: 0.5 // 10% del elemento visible para activar
});

elements.forEach(el => observer.observe(el));

 

//codigo para mostrar el boton 

const btnUp = document.getElementById('btnUp');

// Mostrar u ocultar el botón según el scroll
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
};

// Al hacer click, subir suavemente
btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});