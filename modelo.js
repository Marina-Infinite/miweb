
/* REDES SOCIALES */

function handleLinkClick(event, mobileUrl, webUrl) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Detect if it's a mobile device
    if (/android|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        event.currentTarget.href = mobileUrl;
    } else {
        event.currentTarget.href = webUrl;
    }
}


document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    handleLinkClick(event, 'https://wa.me/2241697504', 'https://web.whatsapp.com/send?phone=2241587587');
});

document.getElementById('instagram-link').addEventListener('click', function(event) {
    handleLinkClick(event, 'instagram://user?username=marina.infinite', 'https://www.instagram.com/marina.infinite/');
});

document.getElementById('facebook-link').addEventListener('click', function(event) {
    handleLinkClick(event, 'fb://profile/marina.infinite', 'https://www.facebook.com/marina.infinite');
});

/* botones de compra */







