function applyDiscount(books) {
    const discount = 0.3;

    booksDiscount = books.map(book => {
        return {...book, preco: book.preco - (discount * book.preco)}
    });
    return booksDiscount;
}