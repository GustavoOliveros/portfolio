import useOnTop from "../hooks/useOnTop";

/**
 * Botón para ir a algún punto inferior del sitio
 * @param {string} elementID - Id del elemento (ej: #tech)
 */
export default function GoToBottom({ elementID }) {
    const onTop = useOnTop();

    return (
        <div className="test4 absolute bottom-10">
            <a
                className={`rounded-full w-12 h-12 bg-storm hover:bg-white scroll-mt-10 flex justify-center items-center  animate-bounce transition-all duration-200 ${
                    !onTop ? "opacity-0 cursor-default" : null
                } `}
                href={"#" + elementID}
                title="Ir hacia abajo"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 384 512"
                    fill="#130F40"
                >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <span className="sr-only">Ir hacia abajo</span>
            </a>
        </div>
    );
}
