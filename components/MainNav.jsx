import { useNavigate } from "react-router-dom"



const MainNav = () => {
    const navigate = useNavigate()
    return (
        <div className="container-fluid text-bg-dark p-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo-container">
                    <img className="logo" src="../public/Amazon_Prime_Video_logo.svg" alt="prime-img"
                        onClick={() => navigate("/")}
                    />
                </div>
                <nav className="navbar-btn py-2">
                    <a className="btn text-white border mx-3" href="/">Home</a>
                    <a className="btn text-white border" href="/movies">Lista film</a>
                </nav>
            </div>

        </div>
    )
}

export default MainNav