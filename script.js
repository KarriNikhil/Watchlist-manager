document.addEventListener('DOMContentLoaded', () => {
    const newItemInput = document.getElementById('newItem');
    const genreInput = document.getElementById('genre');
    const watchlist = document.getElementById('watchlist');
    const addToWatchlistBtn = document.getElementById('addToWatchlistBtn');

    addToWatchlistBtn.addEventListener('click', addItem);

    function addItem() {
        const newItemText = newItemInput.value.trim();
        if (newItemText !== '') {
            const genreText = genreInput.value.trim();
            const listItem = document.createElement('li');
            listItem.classList.add('watchlist-item');
            listItem.innerHTML = `
                <span>${newItemText}</span>
                <div class="status">Not Watched</div>
                <button onclick="removeItem(this.parentNode)">Remove</button>
                <div class="genre">${genreText}</div>
            `;
            listItem.addEventListener('click', () => toggleStatus(listItem));
            watchlist.appendChild(listItem);
            newItemInput.value = '';
            genreInput.value = '';
        }
    }

    function removeItem(listItem) {
        watchlist.removeChild(listItem);
    }

    function toggleStatus(listItem) {
        const statusElement = listItem.querySelector('.status');
        const currentStatus = statusElement.textContent.trim();
        statusElement.textContent = currentStatus === 'Not Watched' ? 'Watched' : 'Not Watched';
    }
});
