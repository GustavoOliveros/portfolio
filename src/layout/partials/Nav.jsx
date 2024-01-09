import useOnTop from "@/hooks/useOnTop";
import NavLink from "../../components/NavLink";

export default function Nav() {
    const isOnTop = useOnTop();

    return (
        <header
            className="fixed top-0 z-50 flex justify-between w-full px-3 md:flex-col md:justify-center md:px-0"
        >
            <nav
                className={`hidden md:flex justify-center max-w-7xl mx-auto py-4 px-4 my-8 rounded-full backdrop-blur-xl transition-all duration-200 ${
                    isOnTop ? "bg-transparent" : " bg-black/50 shadow"
                }`}
            >
                <ul className="flex gap-8 items-center">
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Acerca de mí</NavLink>
                    </li>
                    <li>
                        <NavLink to="/works">Proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contacto</NavLink>
                    </li>
                </ul>
            </nav>

            <nav className="flex md:hidden pt-6 pb-2">
                <button>Menú</button>
            </nav>
        </header>
    );
}
