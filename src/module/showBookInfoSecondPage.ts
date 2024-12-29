const bookColor: HTMLElement | null = document.querySelector('.theBook')
const bookTitleFirstPage: HTMLElement | null = document.querySelector('#bookTitleFirstPage')
const bookArthurFirstPage: HTMLElement | null = document.querySelector('#bookArthurFirstPage')
const bookTitleInfo: HTMLElement | null = document.querySelector('#bookTitleInfo')
const bookArthurInfo: HTMLElement | null = document.querySelector('#bookArthurInfo')
const bookDescription: HTMLElement | null = document.querySelector('#bookDescription')
const audience: HTMLElement | null = document.querySelector('#audience')
const pages: HTMLElement | null = document.querySelector('#pages')
const firstPublished: HTMLElement | null = document.querySelector('#firstpublished')
const publisher: HTMLElement | null = document.querySelector('#publisher')
import Books from '../interfaces/books' 

export default function showBookInfoSecondPage (book: Books) {
    bookColor!.style.backgroundColor = book.color;
    bookTitleFirstPage!.innerText = book.title;
    bookArthurFirstPage!.innerText = book.author;
    bookTitleInfo!.innerText = book.title;
    bookArthurInfo!.innerText = book.author;
    bookDescription!.innerText = book.plot;
    audience!.innerText = book.audience;
    pages!.innerText = String(book.pages);
    firstPublished!.innerText = String(book.year);
    publisher!.innerText = book.publisher;
}