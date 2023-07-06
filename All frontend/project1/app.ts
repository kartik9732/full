interface Book {
    title: string;
    author: string;
  }
  
  const books: Book[] = [
    {"title":"My Talented book","author":"ABC"},
    {"title":"My Third Book","author":"XYZ"},
    {"title":"First Book", "author":"CDE"}
  ];
  
  const searchField = document.getElementById('searchField') as HTMLInputElement;
  const resultsContainer = document.getElementById('resultsContainer') as HTMLDivElement;
  
  searchField.addEventListener('input', handleSearch);
  
  function handleSearch() {
    const query = searchField.value.trim();
    const results = books.filter((book) => book.title.includes(query));
    displayResults(results);
  }
  
  function displayResults(results: Book[]) {
    resultsContainer.innerHTML = '';
    results.forEach((book) => {
      const div = document.createElement('div');
      div.textContent = `${book.title} - ${book.author}`;
      resultsContainer.appendChild(div);
    });
  }
  