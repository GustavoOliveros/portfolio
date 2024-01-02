import Logo from "@/components/Logo";
import useOnTop from "@/hooks/useOnTop";
import { useState } from "react";
import NavLink from "../../components/NavLink";

export default function Nav() {
    const isOnTop = useOnTop();

    return (
        <div
            className={`fixed w-full top-0 z-50 transition-all duration-500 flex justify-between px-3 md:justify-center md:flex-col  md:px-0 ${
                isOnTop ? "" : "bg-white"
            }`}
        >
            <div className="text-center pt-6 pb-2 text-2xl">GMOL</div>
            <nav className="max-w-7xl mx-auto justify-center pb-8 hidden md:flex">
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
