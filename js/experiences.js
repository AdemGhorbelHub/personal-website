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
                    <p><strong>${experience.company}</strong> | ${experience.duration}</p>
                    <p>${experience.description}</p>
                </div>
            `;
            timelineItem.innerHTML = content;
            timeline.appendChild(timelineItem);
        });
    });
