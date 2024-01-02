import { useState } from "react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="#"
            className={"relative " + className}
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <div
                className={`h-1 rounded-full absolute -bottom-1 bg-summer transition-all duration-200 ease-out ${
                    !isHovered ? "w-0" : "w-full"
                }`}
                aria-hidden
            ></div>
        </a>
    );
}
