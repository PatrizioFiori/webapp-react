import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayouts from "../layouts/DefaultLayouts";
import HomePage from "../pages/HomePage";
import Error404Page from "../pages/Error404Page";
import MoviesList from "../pages/MoviesList";
import MoviesDetails from "../pages/MoviesDetails.Jsx";
import { GlobalProvider } from "../context/GlobalContext";
import AddMoviePage from "../pages/AddMoviePage";

const App = () => {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route Component={DefaultLayouts}>
                        <Route path="/movies" Component={MoviesList} />
                        <Route path="/" Component={HomePage} />
                        <Route path="/movies/:id" Component={MoviesDetails} />
                        <Route path="*" Component={Error404Page} />
                        <Route path="/movies/add" Component={AddMoviePage} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App