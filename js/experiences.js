// Load experiences from JSON
fetch('data/experiences.json')
    .then(response => response.json())
    .then(data => {
        const timeline = document.getElementById('experienceTimeline');
        data.forEach((experience, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item', index % 2 === 0 ? 'left' : 'right');

            const content = `
                <div class="timeline-content">
                    <h3>${experience.title}</h3>
                    <div class="company-info">
                        <img src="${experience.logo}" alt="${experience.company} Logo" class="company-logo">
                        <span class="company-name">${experience.company}</span>
                        <div class="company-links">
                            <a href="${experience.website}" target="_blank">
                                <img src="images/icons/website.png" alt="Website" class="icon">
                            </a>
                            <a href="${experience.linkedin}" target="_blank">
                                <img src="images/icons/linkedin.png" alt="LinkedIn" class="icon">
                            </a>
                        </div>
                    </div>
                    <p class="duration">${experience.duration}</p>
                    <p class="description">${experience.description}</p>
                </div>
            `;
            timelineItem.innerHTML = content;
            timeline.appendChild(timelineItem);
        });
    });
