import { Outlet } from "react-router-dom";
import Nav from "./partials/Nav";
import Footer from "./partials/Footer";
import GoToTop from "./partials/GoToTop";
import { ScrollRestoration } from "react-router-dom";

export default function Layout({ }) {
    return (
        <>
            <div className="bg-gradient-to-r from-purple to-turq">
                <Nav />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>

            {/* OFF-CONTENT */}
            <GoToTop />
            <ScrollRestoration />

        </>
    );
}
