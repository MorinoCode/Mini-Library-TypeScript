import Books from '../interfaces/books' 


const booksElement: HTMLElement | null = document.querySelector('#books')

export  default function createElementsFirstPage (book: Books): void {

    const article: HTMLElement = document.createElement('article');
        article.classList.add('book');
        article.style.backgroundColor = book.color;
        article.setAttribute('data-title', book.title); 

    const div: HTMLElement = document.createElement('div');
        div.classList.add("bookInfo");
        div.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;

    article.appendChild(div);
    booksElement?.appendChild(article);
}