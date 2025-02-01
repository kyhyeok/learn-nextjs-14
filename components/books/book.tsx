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
    return <Link prefetch href={`/books/${book.list_name}`} >
        <div key={book.list_name} className={bookStyle.bookList}>
            <h2 className={bookStyle.bookTitle}>{book.display_name}</h2>
            <div className={bookStyle.bookCard}>
                <p>🗓️ {book.oldest_published_date} ~ {book.newest_published_date}</p>
                <span className={bookStyle.badge}>{book.updated} Updated</span>
            </div>
        </div>
    </Link>
}