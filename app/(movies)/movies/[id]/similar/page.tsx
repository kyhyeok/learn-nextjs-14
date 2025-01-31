import MovieInfo from "../../../../../components/movie-info";
import {Suspense} from "react";
import {generateMetadata} from "../../../../../components/metadata-title";
import MovieSimilar from "../../../../../components/movie-similar";

export {generateMetadata};

export default async function MovieCredit({params}: { params: { id: string } }) {
    const {id} = await params;
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie similar info</h1>}>
            <MovieSimilar id={id}/>
        </Suspense>
    </div>
}