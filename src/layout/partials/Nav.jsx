import useOnTop from '@/hooks/useOnTop';
import NavLink from '../../components/NavLink';

export default function Nav() {
    const isOnTop = useOnTop();

    return (
        <header className="sticky top-4 z-50 flex w-full justify-between md:top-0 md:flex-col md:justify-center md:px-0">
            <nav
                className={`mx-auto flex max-w-7xl justify-center rounded-full py-2 backdrop-blur-xl transition-all duration-200 md:my-8 md:px-1 md:py-2 ${
                    isOnTop ? 'bg-transparent' : ' bg-black/50 shadow'
                }`}
            >
                <ul className="flex items-center justify-center  md:gap-8">
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
