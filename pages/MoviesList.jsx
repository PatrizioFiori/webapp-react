import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import Card from "../components/Card"


const MoviesList = () => {

    const { listaFilm, fetchMovies } = useGlobalContext()

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <div className="homepage-container">
            <div className="container d-flex justify-content-center my-4">
                <div className="row mb-4">
                    {listaFilm.map((item) => (
                        <div div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={item.id} >
                            <Card item={item} />

                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}

export default MoviesList