import {API_URL} from "../app/(home)/page";
import movieInfoStyle from "../styles/movie-info.module.css"
import movieCreditsStyle from "../styles/movie-credits.module.css"
import {getMovie} from "./movie-info";

export async function getCredits(id: string) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({id}: { id: string }) {
    const credits = await getCredits(id);
    const movie = await getMovie(id);
    return <div>
        <div className={movieInfoStyle.container}>
            <img className={movieInfoStyle.poster} src={movie.poster_path} alt={movie.title}/>
            <div className={movieInfoStyle.info}>
                <h1 className={movieInfoStyle.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <div>
                    <p>
                        <span>releaseDate: {movie.release_date} | </span>
                        <span>runtime: {movie.runtime} minutes</span>
                        <span>{movie.adult == true ? " | for adult️" : ""}</span>
                    </p>
                </div>
            </div>
        </div>
        <div className={movieCreditsStyle.container}>
            {credits.map(credit => {
                return <div key={credit.id}>
                    <img src={credit.profile_path} alt={credit.name}/>
                    <div className={movieCreditsStyle.profileBox}>
                        <div>
                            <p>name</p>
                            <h4>{credit.name}</h4>
                        </div>
                        <div>
                            <p>character</p>
                            <h5>{credit.character}</h5>
                        </div>
                        <div>
                            <p>gender</p>
                            <h6>{credit.gender === 1 ? "female": "male"}</h6>
                        </div>
                        <div>
                            <p>popularity</p>
                            <h6>{credit.popularity.toFixed(2)}</h6>
                        </div>
                    </div>
                </div>

            })}
        </div>
    </div>
}