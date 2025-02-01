import MovieCredits from "../../../../../components/movies/movie-credits";
import MovieInfo from "../../../../../components/movies/movie-info";
import {generateMetadata, IParams} from "../../../../../components/metadata-title";
import {Suspense} from "react";

export {generateMetadata};

export default async function MovieCredit(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie credits info</h1>}>
            <MovieCredits id={id}/>
        </Suspense>
    </div>
}