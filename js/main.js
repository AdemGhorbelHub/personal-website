// Initialize Particle.js
particlesJS.load('particles-js', 'data/particles.json', function() {
    console.log('Particles.js loaded');
});
// Update Progress Bar on Scroll
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
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

// LinkedIn Posts Carousel
let currentLinkedInPostIndex = 0;

function scrollLinkedInPosts(direction) {
    const postsGrid = document.querySelector('.linkedin-posts-grid');
    const posts = document.querySelectorAll('.linkedin-post');
    const totalPosts = posts.length;

    currentLinkedInPostIndex = (currentLinkedInPostIndex + direction + totalPosts) % totalPosts;
    postsGrid.style.transform = `translateX(-${currentLinkedInPostIndex * 100}%)`;

    updateLinkedInPostIndicators();
}

function goToLinkedInPost(index) {
    const postsGrid = document.querySelector('.linkedin-posts-grid');
    currentLinkedInPostIndex = index;
    postsGrid.style.transform = `translateX(-${currentLinkedInPostIndex * 100}%)`;

    updateLinkedInPostIndicators();
}

function updateLinkedInPostIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    indicators.forEach((indicator, i) => {
        if (i === currentLinkedInPostIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Initialize LinkedIn Posts Carousel
document.addEventListener('DOMContentLoaded', () => {
    const linkedinPostsGrid = document.querySelector('.linkedin-posts-grid');
    linkedinPostsGrid.style.transform = 'translateX(0)';
    updateLinkedInPostIndicators();
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
