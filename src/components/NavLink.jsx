import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({ to, className = "", isOnTop, children, ...props }) {
    return (
        <RouterNavLink
            to={to}
            className={
                (({isActive}) => (
                    `px-3 py-1 rounded-full  ${isActive ? 'bg-summer text-black' : 'hover:bg-storm/50'}`
                ))
            }
            {...props}
        >
            {children}
            
        </RouterNavLink>
    );
}
