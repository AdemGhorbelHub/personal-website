// Load gallery images from JSON
fetch('data/gallery.json')
    .then(response => response.json())
    .then(data => {
        const galleryGrid = document.getElementById('galleryGrid');
        data.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            const content = `
                <img src="${image.src}" alt="${image.alt}">
                <div class="overlay">
                    <p>${image.caption}</p>
                </div>
            `;
            galleryItem.innerHTML = content;
            galleryGrid.appendChild(galleryItem);
        });
    });
