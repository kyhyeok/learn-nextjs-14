import bookStyle from "../../styles/book/book.module.css";
import Link from "next/link";

interface BookProps {
    book: {
        list_name: string;
        display_name: string;
        oldest_published_date: string;
        newest_published_date: string;
        updated: string;
    };
}

export default function Book({ book }: BookProps) {
    return <Link href={`/books/${book.list_name}`} >
        <div key={book.list_name} className={bookStyle.bookBox}>
            <h2>{book.display_name}</h2>
            <div className={bookStyle.bookInfo}>
                <p>OldestPublished: {book.oldest_published_date}</p>
                <p>NewestPublished: {book.newest_published_date}</p>
                <p>Updated: {book.updated}</p>
            </div>
        </div>
    </Link>
}