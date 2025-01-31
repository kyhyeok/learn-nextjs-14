import {API_URL} from "../app/(home)/page";
import movieCreditsStyle from "../styles/movie-other-info.module.css"
import {getMovie} from "./movie-info";

export async function getCredits(id: string) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({id}: { id: string }) {
    const credits = await getCredits(id);
    return <div className={movieCreditsStyle.container}>
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
                            <h6>⭐️ {credit.popularity.toFixed(2)}</h6>
                        </div>
                    </div>
                </div>
            })}
        </div>
}