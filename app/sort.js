let btnSortPrice = document.getElementById('btnOrdenarPorPreco');

btnSortPrice.addEventListener('click', sortBooksPrice);

function sortBooksPrice() {
    let hasAsc = this.classList.toggle('asc') ? true : false;

    let sortBooks = books.sort((a, b) => sortBooksFilter(a, b, hasAsc));
    viewBooks(sortBooks);
}

function sortBooksFilter(a, b, hasAsc) {
    return (hasAsc == true) ? (a.preco - b.preco) : (b.preco - a.preco);
}