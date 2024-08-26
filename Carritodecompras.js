document.getElementById('boton-pedir-ahora').addEventListener('click', function(event) {
    handleLinkClick(event, 'https://api.whatsapp.com/send?phone=542241587587&text=Hola,%20me%20interesa%20el%20producto%20Valeria', 'https://web.whatsapp.com/send?phone=542241587587&text=Hola,%20me%20interesa%20el%20producto%20Valeria');
});

function handleLinkClick(event, appLink, webLink) {
    event.preventDefault();
    // Intenta abrir la app de WhatsApp
    window.location.href = appLink;
    
    // Si la app no se abre, redirige a la versión web de WhatsApp después de un pequeño retraso
    setTimeout(function() {
        window.location.href = webLink;
    }, 1000);
}

document.querySelectorAll('.boton1').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Obtén el enlace desde el atributo data-* del botón
        const appLink = button.getAttribute('data-app-link');

        // Intenta abrir WhatsApp en la aplicación
        window.location.href = appLink;

        // Nota: No hay fallback a la versión web en este caso
    });
});







  

   
