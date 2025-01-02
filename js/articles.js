// Load articles from JSON
fetch('data/articles.json')
    .then(response => response.json())
    .then(data => {
        const articlesGrid = document.getElementById('articlesGrid');
        data.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');

            const content = `
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="${article.link}" target="_blank">Read More</a>
            `;
            articleCard.innerHTML = content;
            articlesGrid.appendChild(articleCard);
        });
    });
