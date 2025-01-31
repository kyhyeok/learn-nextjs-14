import Movie from "../../components/movie";
import homeStyles from "../../styles/home.module.css"
import {API_URL} from "../movie-api";


export const metadata =  {
    title: "Home",
}



async function getMovies() {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    return await fetch(API_URL).then(response => response.json());
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