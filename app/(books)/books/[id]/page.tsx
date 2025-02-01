import {generateMetadata, IParams} from "../../../../components/metadata-title";
import {Suspense} from "react";
import BookInfo from "../../../../components/books/book-info";


export default async function BookDetail(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <BookInfo id={id}/>
        </Suspense>
    </div>
}