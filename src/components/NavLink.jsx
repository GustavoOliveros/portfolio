import { NavLink as RouterNavLink } from 'react-router-dom';

export default function NavLink({
    to,
    className = '',
    isOnTop,
    children,
    ...props
}) {
    return (
        <RouterNavLink
            to={to}
            className={({ isActive }) =>
                `mx-2 line-clamp-1 rounded-full px-2 py-2 text-xs md:px-3 md:py-2 md:text-sm  ${isActive ? 'bg-summer text-black' : 'hover:bg-storm/50'}`
            }
            {...props}
        >
            {children}
        </RouterNavLink>
    );
}
