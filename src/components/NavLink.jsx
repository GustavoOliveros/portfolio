import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({ to, className = "", isOnTop, children, ...props }) {
    return (
        <RouterNavLink
            to={to}
            className={
                (({isActive}) => (
                    `md:px-3 md:py-2 text-xs md:text-sm px-2 py-2 line-clamp-1 mx-2 rounded-full  ${isActive ? 'bg-summer text-black' : 'hover:bg-storm/50'}`
                ))
            }
            {...props}
        >
            {children}
            
        </RouterNavLink>
    );
}
