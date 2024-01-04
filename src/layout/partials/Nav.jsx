import useOnTop from "@/hooks/useOnTop";
import NavLink from "../../components/NavLink";

export default function Nav() {
    const isOnTop = useOnTop();

    return (
        <div
            className={`fixed w-full top-0 z-50 flex justify-between px-3 md:justify-center md:flex-col  md:px-0 `}
        >
            <nav className={`max-w-7xl mx-auto justify-center transition-all duration-200  py-2 px-4 rounded-full mb-8 mt-8 hidden md:flex backdrop-blur-xl   ${
                isOnTop ? "bg-transparent" : " bg-black/75 shadow"
            }`}>
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
        </div>
    );
}
