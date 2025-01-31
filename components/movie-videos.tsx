import movieVideoStyles from "../styles/movie-videos.module.css";
import {API_URL} from "../app/movie-api";

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}: { id:string }) {
    const videos = await getVideos(id);
    return <div className={movieVideoStyles.container}>
            {videos.map(video =>
                <iframe key={video.id} title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                src={`https://www.youtube.com/embed/${video.key}`} />
            )}
        </div>
}