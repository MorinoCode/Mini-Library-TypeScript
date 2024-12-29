const firstPage: HTMLElement | null = document.querySelector('.container')
const secondePage: HTMLElement | null = document.querySelector('.containerBookInfo')

//Change Page
export default function  navigateToSecondPage():void {
    firstPage!.style.display = 'none';
    secondePage!.style.display = 'block';
}