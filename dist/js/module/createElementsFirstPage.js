const booksElement = document.querySelector('#books');
export default function createElementsFirstPage(book) {
    const article = document.createElement('article');
    article.classList.add('book');
    article.style.backgroundColor = book.color;
    article.setAttribute('data-title', book.title);
    const div = document.createElement('div');
    div.classList.add("bookInfo");
    div.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;
    article.appendChild(div);
    booksElement === null || booksElement === void 0 ? void 0 : booksElement.appendChild(article);
}
