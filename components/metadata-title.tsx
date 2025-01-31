import {getMovie} from "./movie-info";

type IParams = Promise<{
    id: string;
}>;

export async function generateMetadata(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}