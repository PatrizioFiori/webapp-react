import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Recensioni from "../components/Recensioni"
import { useNavigate } from "react-router-dom";
import FormRecensioni from "../components/FormRecensioni";

const MoviesDetails = () => {
    const { id } = useParams();
    const { movieDetails, fetchMoviesForId, deleteMovie } = useGlobalContext();

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
                            <div className="">
                                <div>
                                    <button className="btn btn-danger" onClick={() => {
                                        if (window.confirm(`Sicuro di voler cancellare: ${movieDetails.title}?`)) {
                                            console.log(`${movieDetails.title} Eliminato`);

                                            deleteMovie(movieDetails.id, () => {
                                                navigate("/movies");
                                            });
                                        }
                                    }}>
                                        Delete
                                    </button>
                                </div>

                            </div>
                        </div>
                        <Recensioni recensioni={movieDetails.reviews} />
                        <FormRecensioni movie_id={id} />
                    </>
                ) : (
                    <p>Caricamento in corso...</p>
                )}

            </div>
        </>
    );
};

export default MoviesDetails;
