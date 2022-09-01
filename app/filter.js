const filterButtons = document.querySelectorAll('.btn');

filterButtons.forEach(button => button.addEventListener('click', filterBooks));

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;

    let booksFilters = category == 'disponivel' ? filterDisponibility() : filterCategory(category);
    viewBooks(booksFilters);

    if (category == 'disponivel') {
        const totalValueBooksReduce = calculateTotalValueBooks(booksFilters);
        viewTotalValue(totalValueBooksReduce);
    }
} 

function filterCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterDisponibility() {
    return books.filter(book => book.quantidade > 0);
}

function viewTotalValue(totalValueBooksReduce) {
    totalValueBooks.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalValueBooksReduce}</span></p>
        </div>
    `;
}