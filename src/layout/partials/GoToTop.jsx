import useOnTop from "../../hooks/useOnTop";

export default function GoToTop() {
    const isOnTop = useOnTop();

    return (
        <a
            className={`rounded-full w-12 h-12 bg-storm hover:bg-white fixed bottom-4 md:bottom-10 flex justify-center items-center right-4 md:right-10 transition-all duration-200 ${
                isOnTop ? "opacity-0 cursor-default" : null
            } `}
            href="#"
            title="Ir al comienzo de la página"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 384 512"
                fill="#130F40"
            >
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
            <span className="sr-only">Ir al comienzo de la página</span>
        </a>
    );
}