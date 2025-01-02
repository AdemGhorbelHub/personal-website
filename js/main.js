// Initialize Particle.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});
// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration
    once: true // Animate only once
});
// Parallax Effect for Hero Section Video
window.addEventListener('scroll', () => {
    const video = document.getElementById('hero-video');
    const scrollPosition = window.scrollY;
    video.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust the multiplier for the effect intensity
});
// Initialize Typed.js
const typed = new Typed('#typed-text', {
    strings: ["Strategy Consultant", "Management Expert", "AI Enthusiast"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});
// Highlight Active Section on Scroll
document.addEventListener('scroll', () => {
    let isScrolling;
    window.clearTimeout(isScrolling);

    // Debounce scroll event for better performance
    isScrolling = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let currentSection = '';

        // Find the current section in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Offset Adjustment: Adjust for fixed header or other layout elements
            if (window.scrollY >= sectionTop - sectionHeight / 3 - 100) { // Adjust offset as needed
                currentSection = section.getAttribute('id');
            }
        });

        // Highlight the active section
        sections.forEach(section => {
            if (section.getAttribute('id') === currentSection) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Highlight the active navigation link
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, 100); // Adjust debounce delay as needed
});
