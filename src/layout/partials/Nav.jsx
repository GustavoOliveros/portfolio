import useOnTop from "@/hooks/useOnTop";
import NavLink from "../../components/NavLink";

export default function Nav() {
    const isOnTop = useOnTop();

    return (
        <header
            className="sticky top-4 md:top-0 z-50 flex justify-between w-full md:flex-col md:justify-center md:px-0"
        >
            <nav
                className={`flex justify-center py-2 max-w-7xl mx-auto md:py-2 md:px-1 md:my-8 rounded-full backdrop-blur-xl transition-all duration-200 ${
                    isOnTop ? "bg-transparent" : " bg-black/50 shadow"
                }`}
            >
                <ul className="flex md:gap-8 justify-center  items-center">
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Bio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/works">Proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
