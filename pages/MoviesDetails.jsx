import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Recensioni from "../components/recensioni"
import { useNavigate } from "react-router-dom";

const MoviesDetails = () => {
    const { id } = useParams();
    const { movieDetails, fetchMoviesForId } = useGlobalContext();

    useEffect(() => {
        fetchMoviesForId(id);
    }, [id, fetchMoviesForId]);


    const navigate = useNavigate()

    return (
        <>
            <div className="container-movies-details">
                <h1 className="movies-title">Dettagli del film</h1>
                <p className="movies-id">ID del film: {id}</p>
                {movieDetails ? (
                    <>
                        <div className="movie-details-content">
                            <img
                                src={movieDetails.image}
                                alt={movieDetails.title}
                                className="movie-image"
                            />
                            <h2 className="movie-title">{movieDetails.title}</h2>
                            <p>{movieDetails.director}</p>
                            <p>{movieDetails.release_year}</p>
                            <p className="movie-abstract">{movieDetails.abstract}</p>
                            <div>
                                <a className="btn border text-bg-warning" href=""><i class="fa-solid fa-arrow-left"></i></a>
                                <button onClick={() => navigate("/movies")} className="btn border text-bg-primary mx-2" >Torna alla lista</button>
                                <a className="btn border text-bg-warning" href=""><i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <Recensioni recensioni={movieDetails.reviews} />
                    </>
                ) : (
                    <p>Caricamento in corso...</p>
                )}
            </div>
        </>
    );
};

export default MoviesDetails;
