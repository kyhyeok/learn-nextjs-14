import MovieCredits from "../../../../../components/movie-credits";

export default async function MovieCredit({ params } : { params: { id: string } }) {
    const { id } = await params;
    return <MovieCredits id={id} />
}