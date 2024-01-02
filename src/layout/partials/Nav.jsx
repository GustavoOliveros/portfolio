import Logo from "@/components/Logo";
import useOnTop from "@/hooks/useOnTop";
import { useState } from "react";
import NavLink from "../../components/NavLink";

export default function Nav() {
    const isOnTop = useOnTop();

    return (
        <div
            className={`fixed w-full top-0 z-50 bg-lime transition-all duration-500 ${
                isOnTop ? "bg-lime" : "bg-white"
            }`}
        >
            <nav className="max-w-7xl mx-auto flex justify-between py-4">
                <Logo />
                <ul className="flex gap-8 items-center">
                    <li>
                        <NavLink>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink>Acerca de mí</NavLink>
                    </li>
                    <li>
                        <NavLink>Proyectos</NavLink>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="bg-summer rounded-full px-6 py-3 hover:bg-yellow-400"
                        >
                            Contactar
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
