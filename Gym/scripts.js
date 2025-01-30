// Inicializar el carrusel
$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

// Validar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('Gracias por contactarnos, ' + nombre + '. Te responderemos pronto.');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});