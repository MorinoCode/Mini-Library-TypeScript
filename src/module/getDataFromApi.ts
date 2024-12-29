import Books from '../interfaces/books' 
// Get Data from Api
export default async function getDataFromApi  (): Promise<Books[]>  {
    try {
        const response: Response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');

        const data: Books[] = await response.json();

        return data;

    } catch (err) {
        console.log(err);
        return [];
    }
};