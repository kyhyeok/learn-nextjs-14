import movieCreditsStyle from "../styles/movie-other-info.module.css"
import Link from "next/link";
import {API_URL} from "../app/movie-api";

export async function getSimilar(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function MovieSimilar({id}: { id: string }) {
    const similars = await getSimilar(id);
    return <div className={movieCreditsStyle.container}>
            {similars.map(similar => {
                return <div key={similar.id}>
                    <Link href={`/movies/${similar.id}`}><img src={similar.poster_path} alt={similar.title}/></Link>
                    <div className={movieCreditsStyle.profileBox}>
                        <div>
                            <p>title</p>
                            <h4>{similar.title}</h4>
                        </div>
                        <div>
                            <p>releaseDate</p>
                            <h5>{similar.release_date}</h5>
                        </div>
                        <div>
                            <p>popularity</p>
                            <h6>⭐️ {similar.popularity.toFixed(2)}</h6>
                        </div>
                        <div>
                            <p>
                                {similar.overview.length > 50
                                    ? `${similar.overview.slice(0, 50)}...`
                                    : similar.overview}
                            </p>
                        </div>
                    </div>
                </div>
            })}
        </div>
}