// Animation de type parallax sur les personnages lorsqu'on défile
window.addEventListener('scroll', function() {
    const luffy = document.getElementById('luffy');
    const zoro = document.getElementById('zoro');
    
    let value = window.scrollY;
    
    luffy.style.left = value * 0.1 + '%';
    zoro.style.right = value * 0.1 + '%';
});

// Effet de survol sur le titre principal
document.getElementById('main-title').addEventListener('mouseover', function() {
    this.style.color = '#FF4500';
    this.style.textShadow = '0 0 10px white';
});

document.getElementById('main-title').addEventListener('mouseleave', function() {
    this.style.color = '#FFD700';
    this.style.textShadow = '4px 4px black';
});
