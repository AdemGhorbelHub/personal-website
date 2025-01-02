// Parallax Effect for Hero Section Video
window.addEventListener('scroll', () => {
    const video = document.getElementById('hero-video');
    const scrollPosition = window.scrollY;
    video.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust the multiplier for the effect intensity
});
// Highlight Active Section on Scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    // Find the current section in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
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
});
