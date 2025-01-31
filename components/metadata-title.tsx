import {getMovie} from "./movie-info";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params:{id}}: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }
}