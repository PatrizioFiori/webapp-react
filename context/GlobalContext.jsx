import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useEffect } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {


    const api_url = import.meta.env.VITE_API_URL
    const [listaFilm, setListaFilm] = useState([])

    function fetchMovies() {
        axios.get(api_url)
            .then((res) => setListaFilm(res.data))
            .catch((err) => console.log("Errore nel fetch dei film", err))
    }

    useEffect(fetchMovies, [])

    const value = {
        listaFilm,
        setListaFilm,
        fetchMovies
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContext, GlobalProvider }