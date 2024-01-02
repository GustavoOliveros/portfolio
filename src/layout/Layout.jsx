import { Outlet } from "react-router-dom";
import Nav from "./partials/Nav";

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main className="">
                <Outlet />
            </main>
            {/* <Footer />{" "} */}
        </>
    );
}
