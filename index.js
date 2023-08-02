function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books') ;

  // Return the fetch Promise
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(response => renderBooks(response))
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(function(book){
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
 fetchBooks()

 Object.renderBooks;
  })
  
  

