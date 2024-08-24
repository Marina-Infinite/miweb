document.getElementById('boton-pedir-ahora').addEventListener('click', function(event) {
    handleLinkClick(event, 'instagram://direct/new?username=marina.infinite', 'https://www.instagram.com/direct/t/');
});

function handleLinkClick(event, appLink, webLink) {
    event.preventDefault();
    // Intenta abrir la app de Instagram en la ventana de mensaje directo
    window.location.href = appLink;
    
    // Si la app no se abre, redirige al navegador después de un pequeño retraso
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







  

   
