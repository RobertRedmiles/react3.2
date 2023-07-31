import Movie from "./Movie";


function Genre({
    name,
    description,
    movieTitle1,
    movieTitle2,
    year
}) {

    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
            <Movie title={movieTitle1} year={year} />
            <Movie title={movieTitle2} year={year} />
        </>
    )
}

export default Genre; 