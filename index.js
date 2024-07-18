// index.js

// Function to fetch books from the API
function fetchBooks() {
  // Return the fetch promise directly
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON
    })
    .then(data => {
      renderBooks(data); // Call renderBooks with the fetched data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Function to render books into the DOM
function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear previous content
  books.forEach(book => {
    const title = document.createElement('h2');
    title.textContent = book.name;
    main.appendChild(title);
  });
}

// Call fetchBooks when the HTML document is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);
