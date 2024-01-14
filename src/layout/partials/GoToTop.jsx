import useOnTop from '../../hooks/useOnTop';

export default function GoToTop() {
    const isOnTop = useOnTop();

    // FIXME: Arreglar bug cuando se está fuera del inicio (mudar a estilo <GoToBottom />)

    return (
        <a
            className={`fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-storm transition-all duration-200 hover:bg-white md:bottom-10 md:right-10 ${
                isOnTop ? 'cursor-default opacity-0' : null
            } `}
            href="#"
            title="Ir al comienzo de la página"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 384 512"
                fill="#130F40"
            >
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
            <span className="sr-only">Ir al comienzo de la página</span>
        </a>
    );
}
