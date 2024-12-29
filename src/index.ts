//imports
import getDataFromApi from "./module/getDataFromApi.js"
import Books  from "./interfaces/books.js"
import createElementsFirstPage from "./module/createElementsFirstPage.js"
import showBookInfoSecondPage from "./module/showBookInfoSecondPage.js"
import navigateToSecondPage from "./module/navigateToSecondPage.js"

//Elements
//FirstPage
const firstPage: HTMLElement | null = document.querySelector('.container')
const serachInput: HTMLInputElement | null = document.querySelector('#serachInput')
const serachBtn: HTMLElement | null = document.querySelector('#serachBtn')


//SecondPage
const secondePage: HTMLElement | null = document.querySelector('.containerBookInfo')
const readMoreBtn:HTMLElement |null = document.querySelector('#readMoreBtn')



// Show Data
const ShowBooks = async () => {
    const books: Books[]  = await getDataFromApi();
    
    books.forEach((book) => {
        createElementsFirstPage(book)
    });

    const allBooks: NodeListOf<HTMLElement> = document.querySelectorAll('.book');

    allBooks.forEach((bookElement) => {
        bookElement.addEventListener('click', () => {

            const bookTitle = bookElement.getAttribute('data-title');
            const book = books.find(b => b.title === bookTitle); 

            if (!book) {
                console.error(`Book with title "${bookTitle}" not found.`);
                return;
            }
            navigateToSecondPage()
            showBookInfoSecondPage(book)

        });
    });
};

readMoreBtn!.addEventListener('click', ()=>{
    firstPage!.style.display = 'grid';
    secondePage!.style.display = 'none';
})
serachBtn?.addEventListener('click', async ()=>{
    const search: string = serachInput!.value.toLowerCase().trim().replace(/\s+/g, '')
    const books: Books[] = await getDataFromApi();
    const book = books.find(b => b.title.toLowerCase().replace(/\s+/g, '') === search);

    if(book){
        navigateToSecondPage()
        showBookInfoSecondPage(book)
    }else{
        alert(`The book with the title: ${search} does not exist in the library.`)
    }
    
    serachInput!.value= '';
})

ShowBooks();

