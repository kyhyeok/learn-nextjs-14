import {BOOK_API_URL} from "../../constants";
import bookStyle from "../../../styles/book/book.module.css";
import Book from "../../../components/books/book";

export const metadata =  {
    title: "Books",
}

async function getBooks() {
    const response = await fetch(`${BOOK_API_URL}/lists`);
    return await response.json();
}

export default async function BooksPage() {
    const books = await getBooks();
    let books_results = books.results;
    return (
        <div>
            <h1 className={bookStyle.containerTitle}>📚 New York times Best Seller List</h1>
            <div className={bookStyle.container}>
                {books_results.map((book) => (
                    <Book key={book.list_name} book={book} />
                ))}
            </div>
        </div>
    )
}