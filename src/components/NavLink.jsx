import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavLink({ to, className = "", children, ...props }) {
    // Chequear si la ruta es la actual
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    // Estado para hover
    const [isHovered, setIsHovered] = useState(false);

    // Combinación del estado de hover y ruta activa
    const isActive = isHovered || match;

    return (
        <Link
            to={to}
            className={
                `relative ${isActive ? " " : null} ` + className
            }
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <div
                className={`h-1 rounded-full absolute -bottom-1 bg-summer transition-all duration-200 ease-out ${
                    !isActive ? "w-0" : "w-full"
                }`}
                aria-hidden
            ></div>
        </Link>
    );
}
