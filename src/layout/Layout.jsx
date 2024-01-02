import Footer from "./partials/Footer";
import Nav from "./partials/Nav";

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main className="">{children}</main>
            <Footer />{" "}
        </>
    );
}
