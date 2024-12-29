var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//imports
import getDataFromApi from "./module/getDataFromApi.js";
import createElementsFirstPage from "./module/createElementsFirstPage.js";
import showBookInfoSecondPage from "./module/showBookInfoSecondPage.js";
import navigateToSecondPage from "./module/navigateToSecondPage.js";
//Elements
//FirstPage
const firstPage = document.querySelector('.container');
const serachInput = document.querySelector('#serachInput');
const serachBtn = document.querySelector('#serachBtn');
//SecondPage
const secondePage = document.querySelector('.containerBookInfo');
const readMoreBtn = document.querySelector('#readMoreBtn');
// Show Data
const ShowBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield getDataFromApi();
    books.forEach((book) => {
        createElementsFirstPage(book);
    });
    const allBooks = document.querySelectorAll('.book');
    allBooks.forEach((bookElement) => {
        bookElement.addEventListener('click', () => {
            const bookTitle = bookElement.getAttribute('data-title');
            const book = books.find(b => b.title === bookTitle);
            if (!book) {
                console.error(`Book with title "${bookTitle}" not found.`);
                return;
            }
            navigateToSecondPage();
            showBookInfoSecondPage(book);
        });
    });
});
readMoreBtn.addEventListener('click', () => {
    firstPage.style.display = 'grid';
    secondePage.style.display = 'none';
});
serachBtn === null || serachBtn === void 0 ? void 0 : serachBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const search = serachInput.value.toLowerCase().trim().replace(/\s+/g, '');
    const books = yield getDataFromApi();
    const book = books.find(b => b.title.toLowerCase().replace(/\s+/g, '') === search);
    if (book) {
        navigateToSecondPage();
        showBookInfoSecondPage(book);
    }
    else {
        alert(`The book with the title: ${search} does not exist in the library.`);
    }
    serachInput.value = '';
}));
ShowBooks();
