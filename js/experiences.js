// experiences.js
class ExperienceManager {
    constructor() {
        this.experiences = [];
        this.container = document.getElementById('experienceTimeline');
    }

    async loadExperiences() {
        try {
            const response = await fetch('/data/experiences.json');
            this.experiences = await response.json();
            this.renderExperiences();
        } catch (error) {
            console.error('Error loading experiences:', error);
        }
    }

    renderExperiences() {
        this.experiences.forEach((exp, index) => {
            const expElement = document.createElement('div');
            expElement.className = `experience-card ${index % 2 === 0 ? 'left' : 'right'}`;
            
            expElement.innerHTML = `
                <div class="experience-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p class="date">${exp.startDate} - ${exp.endDate}</p>
                    <div class="description">${exp.description}</div>
                    ${this.renderTechStack(exp.technologies)}
                    ${this.renderGallery(exp.images)}
                </div>
            `;
            
            this.container.appendChild(expElement);
            this.animateOnScroll(expElement);
        });
    }

    renderTechStack(technologies) {
        if (!technologies || technologies.length === 0) return '';
        
        return `
            <div class="tech-stack">
                ${technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
    }

    renderGallery(images) {
        if (!images || images.length === 0) return '';
        
        return `
            <div class="experience-gallery">
                ${images.map(image => `
                    <img src="/images/experiences/${image}" 
                         alt="Project image" 
                         onclick="expandImage(this.src)"
                    />
                `).join('')}
            </div>
        `;
    }

    animateOnScroll(element) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        element.classList.add('animate');
                        observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.2 }
        );
        
        observer.observe(element);
    }
}

// Initialize and load experiences
const experienceManager = new ExperienceManager();
document.addEventListener('DOMContentLoaded', () => experienceManager.loadExperiences());
