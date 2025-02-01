import {BOOK_API_URL} from "../../app/constants";

export async function getBook(id: string) {
    const response = await fetch(`${BOOK_API_URL}/list?name=${id}`);
    return response.json();
}

export default async function BookInfo({id}: { id:string }) {
    const book = await getBook(id);
    console.log(book);
    return <div>
        <h1>BookInfo</h1>
    </div>
}
