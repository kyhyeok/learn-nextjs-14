import MovieVideos from "../../../../components/movies/movie-videos";
import MovieInfo from "../../../../components/movies/movie-info";
import {Suspense} from "react";
import {generateMetadata, IParams} from "../../../../components/metadata-title";

export {generateMetadata};


export default async function MovieDetail(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}