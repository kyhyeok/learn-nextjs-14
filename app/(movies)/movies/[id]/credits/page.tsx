import MovieCredits from "../../../../../components/movie-credits";
import MovieInfo from "../../../../../components/movie-info";
import {generateMetadata} from "../../../../../components/metadata-title";
import {Suspense} from "react";

export {generateMetadata};

export default async function MovieCredit({params}: { params: { id: string } }) {
    const {id} = await params;
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie credits info</h1>}>
            <MovieCredits id={id}/>
        </Suspense>
    </div>
}