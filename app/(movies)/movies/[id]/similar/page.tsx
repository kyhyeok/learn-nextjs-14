import MovieInfo from "../../../../../components/movies/movie-info";
import {Suspense} from "react";
import MovieSimilar from "../../../../../components/movies/movie-similar";
import {generateMetadata, IParams} from "../../../../../components/metadata-title";

export {generateMetadata};

export default async function MovieCredit(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie similar info</h1>}>
            <MovieSimilar id={id}/>
        </Suspense>
    </div>
}