const sectionBooks = document.getElementById('livros');

const totalValueBooks = document.getElementById('valor_total_livros_disponiveis');


function viewBooks(books) {
    totalValueBooks.innerHTML = ''; 
    sectionBooks.innerHTML = '';

    books.forEach(book => {
        let bookExists = (book.quantidade > 0) ? 'livro__imagens' : 'livro__imagens indisponivel';

        sectionBooks.innerHTML += `
            <div class="livro">
                <img class="${bookExists}" src="${book.imagem}" alt="${book.alt}"/>
                <h2 class="livro__titulo">
                  ${book.titulo}
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    });
}