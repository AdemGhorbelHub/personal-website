// Parallax Effect for Hero Section Video
window.addEventListener('scroll', () => {
    const video = document.getElementById('hero-video');
    const scrollPosition = window.scrollY;
    video.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust the multiplier for the effect intensity
});
