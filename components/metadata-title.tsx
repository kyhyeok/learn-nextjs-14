import {getMovie} from "./movies/movie-info";
import {getBook} from "./books/book-info";

export type IParams = Promise<{
    id: string;
}>;

function isConvertibleToInt(value: any) {
    const num = Number(value);
    return Number.isInteger(num) && !isNaN(num);
}

export async function generateMetadata(props: { params: IParams }) {
    const { id } = await props.params;

    const fetchData = async (id: any) =>
        isConvertibleToInt(id)
            ? await getMovie(id)
            : await getBook(id);

    const extractTitle = (data: any, isMovie: any) =>
        isMovie ? data.title : data.results.display_name;

    const isMovie = isConvertibleToInt(id);
    const data = await fetchData(id);
    const title = extractTitle(data, isMovie);

    return { title };
}

