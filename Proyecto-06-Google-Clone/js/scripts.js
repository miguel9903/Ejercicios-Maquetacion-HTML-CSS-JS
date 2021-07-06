const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchInput.value.length !== 0) {
        location.href = `https://www.google.com/search?q=${searchInput.value}`;
    }
});