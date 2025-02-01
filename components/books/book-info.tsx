import {BOOK_API_URL} from "../../app/constants";
import bookInfoStyle from "../../styles/book/book-info.module.css";
import Link from "next/link";

export async function getBook(id: string) {
    const response = await fetch(`${BOOK_API_URL}/list?name=${id}`);
    return response.json();
}

export default async function BookInfo({id}: { id: string }) {
    const bookResults = await getBook(id);
    const books = bookResults.results.books;
    return <div className={bookInfoStyle.bookList}>
        {books.map(book => (
            <div key={book.title} className={bookInfoStyle.bookCard}>
                <img src={book.book_image} alt={book.title}/>
                <div className={bookInfoStyle.bookInfo}>
                    <h2>Rank {book.rank} - {book.title}</h2>
                    <p className={bookInfoStyle.bookInfoAuthor}>{book.author} - {book.publisher}</p>
                    <p className={bookInfoStyle.bookInfoDescription}>{book.description}</p>
                    <div className={bookInfoStyle.buyLinks}>
                        {book.buy_links.map(link => (
                            <Link href={link.url} key={link.name} target="_blank">{link.name}</Link>
                        ))}

                    </div>
                </div>
            </div>
        ))}
    </div>
}
