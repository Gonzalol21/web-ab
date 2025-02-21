// ================ FUNCIONALIDADES ESENCIALES ================

// 1. Crear el botón del menú hamburguesa solo en móviles
const menuToggle = document.createElement('button');
if (window.innerWidth <= 768) {
    menuToggle.innerHTML = '☰'; // Icono de hamburguesa
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Abrir menú'); // Accesibilidad

    // Agregar el botón al contenedor de la navbar
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(menuToggle);
    }

    // 2. Alternar el menú al hacer clic en el botón
    menuToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }
    });

    // 3. Cerrar el menú al hacer clic en un enlace (solo en móviles)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && window.innerWidth <= 768) { // Solo en móviles
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // 4. Cambiar el color del ícono del menú al hacer scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 100;
        if (menuToggle) {
            menuToggle.style.color = scrolled ? '#fff' : '#1A2330';
        }
    });
}

// 2. Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 3. Cambio de Navbar al Hacer Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 100;
    
    navbar.classList.toggle('scrolled', scrolled);
    menuToggle.style.color = scrolled ? '#fff' : '#1A2330';
});

// 4. Animaciones al Scroll
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(elementTop < windowHeight * 0.85) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
scrollReveal(); // Ejecutar al cargar


// 5. Validaciones formulario
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir envío inicial

    const fields = ['nombre', 'email', 'mensaje'];
    let isValid = true;

    // Limpiar errores previos
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

    // Validar campos
    fields.forEach(id => {
        const input = document.getElementById(id);
        if (!input.value.trim() || (id === 'email' && !validateEmail(input.value))) {
            showError(input, `Ingrese un ${id === 'email' ? 'email válido' : 'valor'}`);
            isValid = false;
        }
    });

    // Enviar si es válido
    if (isValid) {
        showSuccess('Mensaje enviado correctamente');
        form.submit();
    }
});

// Funciones auxiliares
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const showError = (input, message) => {
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    input.classList.add('error');
    input.parentElement.appendChild(error);
};

const showSuccess = message => {
    const success = document.createElement('div');
    success.className = 'success-message';
    success.textContent = message;
    form.prepend(success);
    setTimeout(() => success.remove(), 3000);
};


/// 6. Botón de WhatsApp Interactivo con imagen local
const whatsappButton = document.createElement('a');
whatsappButton.href = 'https://wa.me/56987458569';
whatsappButton.className = 'whatsapp-button';

// Crear la imagen desde tu PC
const whatsappIcon = document.createElement('img');
whatsappIcon.src = 'assets/img/wsp.png';  // Ruta relativa a la imagen en tu PC
whatsappIcon.alt = 'WhatsApp Icon';
whatsappIcon.style.width = '50px';  // Ajusta el tamaño de la imagen según lo necesites
whatsappIcon.style.height = '50px'; // Ajusta el tamaño de la imagen según lo necesites

// Agregar la imagen al botón
whatsappButton.appendChild(whatsappIcon);

document.body.appendChild(whatsappButton);

// ================ FUNCIONALIDADES ADICIONALES ================

// 8. Actualizar año en el footer
document.querySelector('.copyright').innerHTML = `© ${new Date().getFullYear()} Abogado - Todos los derechos reservados`;
