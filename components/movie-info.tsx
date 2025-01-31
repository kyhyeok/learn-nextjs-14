import {API_URL} from "../app/(home)/page";
import movieInfoStyle from "../styles/movie-info.module.css"

async function getMovie(id: string) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}: { id:string }) {
    const movie = await getMovie(id);
    console.log(movie.production_companies);
    return <div className={movieInfoStyle.container}>
        <img className={movieInfoStyle.poster} src={movie.poster_path} alt={movie.title} />
        <div className={movieInfoStyle.info}>
            <h1 className={movieInfoStyle.title}>{movie.title}</h1>
            <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <div>
                <p>
                    <span>releaseDate: {movie.release_date} | </span>
                    <span>runtime: {movie.runtime} minutes</span>
                    <span>{movie.adult == true ? " | for adult️": ""}</span>
                </p>
            </div>
            <div>
                genres: {movie.genres.map((genre, index) => {
                return <span key={genre.id}>
                    {genre.name}
                    {index !== movie.genres.length - 1 && ', '}
                </span>
            })}
            </div>
            <div>
                <h4>productionCompanies</h4>
            </div>
            <div className={movieInfoStyle.productionCompanies}>
                {movie.production_companies.map((companie, index) => {
                    return !companie.logo_path.includes("null") ? ( // 이미지가 있는 경우만 렌더링
                        <div key={companie.id} className={movieInfoStyle.productionCompaniesBox}>
                            <img
                                src={companie.logo_path}
                                alt={companie.name}
                                className={movieInfoStyle.productionCompaniesImg}
                            />
                        </div>
                    ) : null;
                })}
            </div>
            <div>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    </div>
}