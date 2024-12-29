const firstPage = document.querySelector('.container');
const secondePage = document.querySelector('.containerBookInfo');
//Change Page
export default function navigateToSecondPage() {
    firstPage.style.display = 'none';
    secondePage.style.display = 'block';
}
