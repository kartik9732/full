"use strict";
const books = [
    { "title": "My Talented book", "author": "ABC" },
    { "title": "My Third Book", "author": "XYZ" },
    { "title": "First Book", "author": "CDE" }
];
const searchField = document.getElementById('searchField');
const resultsContainer = document.getElementById('resultsContainer');
searchField.addEventListener('input', handleSearch);
function handleSearch() {
    const query = searchField.value.trim();
    const results = books.filter((book) => book.title.includes(query));
    displayResults(results);
}
function displayResults(results) {
    resultsContainer.innerHTML = '';
    results.forEach((book) => {
        const div = document.createElement('div');
        div.textContent = `${book.title} - ${book.author}`;
        resultsContainer.appendChild(div);
    });
}
//# sourceMappingURL=app.js.map