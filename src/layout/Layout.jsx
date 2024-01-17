import { Outlet } from 'react-router-dom';
import Nav from './partials/Nav';
import Footer from './partials/Footer';
import GoToTop from './partials/GoToTop';
import { ScrollRestoration } from 'react-router-dom';
import { useRef } from 'react';

export default function Layout({}) {
    const topRef = useRef();

    return (
        <>
            <div className="bg-gradient-to-r from-purple to-turq" ref={topRef}>
                <Nav />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>

            {/* OFF-CONTENT */}
            <GoToTop toRef={topRef} />
            <ScrollRestoration />
        </>
    );
}
