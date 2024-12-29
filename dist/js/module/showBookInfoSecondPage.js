const bookColor = document.querySelector('.theBook');
const bookTitleFirstPage = document.querySelector('#bookTitleFirstPage');
const bookArthurFirstPage = document.querySelector('#bookArthurFirstPage');
const bookTitleInfo = document.querySelector('#bookTitleInfo');
const bookArthurInfo = document.querySelector('#bookArthurInfo');
const bookDescription = document.querySelector('#bookDescription');
const audience = document.querySelector('#audience');
const pages = document.querySelector('#pages');
const firstPublished = document.querySelector('#firstpublished');
const publisher = document.querySelector('#publisher');
export default function showBookInfoSecondPage(book) {
    bookColor.style.backgroundColor = book.color;
    bookTitleFirstPage.innerText = book.title;
    bookArthurFirstPage.innerText = book.author;
    bookTitleInfo.innerText = book.title;
    bookArthurInfo.innerText = book.author;
    bookDescription.innerText = book.plot;
    audience.innerText = book.audience;
    pages.innerText = String(book.pages);
    firstPublished.innerText = String(book.year);
    publisher.innerText = book.publisher;
}
