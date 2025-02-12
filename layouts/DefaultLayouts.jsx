import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import Loader from "../components/Loarder";
import { useGlobalContext } from "../context/GlobalContext";

const DefaultLayouts = () => {

    const { isLoading } = useGlobalContext()

    return (
        <>
            <header>
                <MainNav />
            </header>
            <main>
                <Outlet />
                {isLoading && <Loader />}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default DefaultLayouts