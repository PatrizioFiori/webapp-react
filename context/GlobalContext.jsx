import { createContext, useContext, useState } from "react"
import axios from "axios"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const api_url = import.meta.env.VITE_API_URL
    const [listaFilm, setListaFilm] = useState([])
    const [movieDetails, setMovieDetails] = useState({})



    function fetchMovies() {
        axios.get(api_url)
            .then((res) => setListaFilm(res.data))
            .catch((err) => console.log("Errore nel fetch dei film", err))
    }

    function fetchMoviesForId(id) {
        axios.get(`${api_url}/${id}`)
            .then((res) => setMovieDetails(res.data))
            .catch((err) => console.log("Errore nel fetch dei film", err))
    }

    const value = {
        listaFilm,
        setListaFilm,
        fetchMovies,
        fetchMoviesForId,
        movieDetails,
        setMovieDetails,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }