import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayouts from "../layouts/DefaultLayouts";
import HomePage from "../pages/HomePage";
import error404Page from "../pages/error404Page";
import MoviesList from "../pages/MoviesList";
import MoviesDetails from "../pages/MoviesDetails.Jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayouts}>
                    <Route path="/movies" Component={MoviesList} />
                    <Route path="/" Component={HomePage} />
                    <Route path="/movies/:id" Component={MoviesDetails} />
                    <Route path="*" Component={error404Page} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App