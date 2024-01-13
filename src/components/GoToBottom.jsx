import useOnTop from '../hooks/useOnTop';

/**
 * Botón para ir a algún punto inferior del sitio
 */
export default function GoToBottom({ toRef }) {
    const onTop = useOnTop();

    const executeScroll = () =>  toRef.current.scrollIntoView();

    return (
        <div className="test4 absolute bottom-5 md:bottom-10">
            <button
                className={`flex h-12 w-12 animate-bounce scroll-mt-10 items-center justify-center rounded-full bg-storm  transition-all duration-200 hover:bg-white ${
                    !onTop ? 'cursor-default opacity-0' : null
                } `}
                onClick={executeScroll}
                title="Ir hacia abajo"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 384 512"
                    fill="#130F40"
                >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <span className="sr-only">Ir hacia abajo</span>
            </button>
        </div>
    );
}
