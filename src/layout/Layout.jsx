import Logo from "../components/Logo";

export default function Layout({ children }) {
    return (
        <div className="h-screen bg-[#EBFEE9]">
            <div className="max-w-7xl mx-auto">
                <nav className="flex justify-between py-4">
                    <Logo />
                    <div className="flex gap-8 items-center">
                        <p>Inicio</p>
                        <p>Acerca de mí</p>
                        <p>Cualidades</p>
                        <p>Proyecto</p>
                        <p className="bg-[#F0AF04] rounded-full px-5 py-2">Contactar</p>
                    </div>
                </nav>
                <main className="">{children}</main>
                <footer className=""></footer>
            </div>
        </div>
    );
}
