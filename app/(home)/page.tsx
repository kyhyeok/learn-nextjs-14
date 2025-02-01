import Movie from "../../components/movies/movie";
import homeStyles from "../../styles/home.module.css"
import {MOVIE_API_URL} from "../constants";

export const metadata =  {
    title: "Home",
}

async function getMovies() {
    const response = await fetch(`${MOVIE_API_URL}`);
    return await response.json();
}

export default async function HomePage () {
    const movies = await getMovies();
    return (
        <div className={homeStyles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            ))}
        </div>
    )
}