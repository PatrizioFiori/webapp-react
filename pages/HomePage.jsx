import { useEffect } from "react"
import Card from "../components/Card"

const HomePage = () => {
    return (
        <div className="homepage-container text-center mt-5">
            <h1>Benvenuto!</h1>
            <p className="text-dark-emphasis">
                Cerca un film nella sezione "lista film"
            </p>
        </div>
    )
}

export default HomePage