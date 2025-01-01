// Carousel Logic for About Me Section
let currentSkillIndex = 0;
const skillsGrid = document.querySelector('.skills-grid');
const indicators = document.querySelectorAll('.indicator');

function scrollSkills(direction) {
    const totalSkills = document.querySelectorAll('.skill-category').length;
    currentSkillIndex = (currentSkillIndex + direction + totalSkills) % totalSkills;
    updateCarousel();
}

function goToSkill(index) {
    currentSkillIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSkillIndex * 100;
    skillsGrid.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSkillIndex);
    });
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSkill(index));
});
