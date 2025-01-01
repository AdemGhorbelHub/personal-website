// Carousel Logic
let currentSkillIndex = 0;
const skillsGrid = document.querySelector('.skills-grid');
const indicators = document.querySelectorAll('.indicator');
let autoScrollInterval;

// Function to scroll the carousel
function scrollSkills(direction) {
    const totalSkills = document.querySelectorAll('.skill-category').length;
    currentSkillIndex = (currentSkillIndex + direction + totalSkills) % totalSkills;
    updateCarousel();
}

// Function to go to a specific skill category
function goToSkill(index) {
    currentSkillIndex = index;
    updateCarousel();
}

// Function to update the carousel position and active indicator
function updateCarousel() {
    const offset = -currentSkillIndex * 100;
    skillsGrid.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSkillIndex);
    });
}

// Auto-scroll carousel every 15 seconds
function startAutoScroll() {
    autoScrollInterval = setInterval(() => scrollSkills(1), 15000);
}

// Image Slideshow Logic
function startImageSlideshow() {
    document.querySelectorAll('.image-slideshow').forEach(slideshow => {
        const images = slideshow.querySelectorAll('img');
        let currentImageIndex = 0;

        setInterval(() => {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }, 5000);
    });
}

// Initialize
startAutoScroll();
startImageSlideshow();
