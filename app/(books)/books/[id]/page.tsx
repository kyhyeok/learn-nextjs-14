import {generateMetadata, IParams} from "../../../../components/metadata-title";
import BookInfo from "../../../../components/books/book-info";
import bookInfoStyle from "../../../../styles/book/book-info.module.css";
import {Suspense} from "react";

export {generateMetadata};

export default async function BookDetail(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    return <div className={bookInfoStyle.container}>
        <h1>📚 {decodeURIComponent(id)}</h1>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <BookInfo id={id}/>
        </Suspense>
    </div>
}