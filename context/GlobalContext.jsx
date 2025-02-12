import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {



    const api_url = import.meta.env.VITE_API_URL
    const [listaFilm, setListaFilm] = useState([])
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false)



    function fetchMovies() {
        setIsLoading(true);
        axios.get(api_url)
            .then((res) => setListaFilm(res.data))
            .catch((err) => console.log("Errore nel fetch dei film", err))
            .finally(() => setIsLoading(false));
    }


    function fetchMoviesForId(id) {
        axios.get(`${api_url}/${id}`)
            .then((res) => setMovieDetails(res.data))
            .catch((err) => console.log("Errore nel fetch dei film", err))
    }

    const deleteMovie = (id, cb) => {
        axios.delete(`${api_url}/${id}`)
            .then(() => {
                console.log(` Film con ID ${id} eliminato con successo.`);
                if (cb) cb();
            })
            .catch((err) => console.error(`Errore nell'eliminazione del film con ID ${id}:`, err));
    };



    const value = {
        listaFilm,
        setListaFilm,
        fetchMovies,
        fetchMoviesForId,
        movieDetails,
        setMovieDetails,
        deleteMovie,
        isLoading,
        setIsLoading
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }