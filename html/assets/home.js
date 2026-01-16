document.addEventListener('DOMContentLoaded', () => {

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Hero image slider
    const images = [
        'images/ideo_Omega_N-0.jpg',
        'images/ON-H2.jpg',
        'images/ON-H1.jpg'
    ];

    let currentIndex = 0;
    const heroImage = document.getElementById('hero-image');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.src = images[currentIndex];
    }, 2000);

});
