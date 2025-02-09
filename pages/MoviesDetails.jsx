import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext"

const MoviesDetails = () => {
    const { id } = useParams();
    const { movieDetails, fetchMoviesForId } = useGlobalContext();

    useEffect(() => {
        fetchMoviesForId(id);
    }, [id]);

    return (
        <div className="container-movies-details">
            <h1 className="movies-title">Dettagli del film</h1>
            <p className="movies-id">ID del film: {id}</p>
            {movieDetails ? (
                <div className="movie-details-content">
                    <img
                        src={movieDetails.image}
                        alt={movieDetails.title}
                        className="movie-image"
                    />
                    <h2 className="movie-title">{movieDetails.title}</h2>
                    <p className="movie-abstract">{movieDetails.abstract}</p>
                </div>
            ) : (
                <p className="loading-message">Caricamento in corso...</p>
            )}
        </div>

    );
};

export default MoviesDetails;
