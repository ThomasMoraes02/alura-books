let books = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function getBooks() {
    const response = await fetch(endpointApi);
    books = await response.json();
    // console.table(books);

    let booksDiscount = applyDiscount(books);
    viewBooks(booksDiscount);
}

getBooks();