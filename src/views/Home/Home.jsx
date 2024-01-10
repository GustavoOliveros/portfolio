import MAIN_WORKS from "../../data/main_works.json";
import GoToBottom from "../../components/GoToBottom";
import { useRef } from "react";
import { useIsFirstVisible } from "../../hooks/useIsFirstVisible";

export default function Home() {
    const techRef = useRef();
    const worksRef = useRef();
    const isTechVisible = useIsFirstVisible(techRef);
    const isWorksVisible = useIsFirstVisible(worksRef);

    return (
        <>
            <section className="flex flex-col md:justify-center items-center h-screen">
                <div className="flex text-5xl mt-16 md:mt-0 md:text-7xl pt-4 md:mb-1 tracking-[.5rem] md:tracking-heading w-full test">
                    <span className="h-line bg-storm my-auto w-full" />
                    <h1 className="ps-2 md:ps-4">GUSTAVO</h1>
                    <span className="h-line bg-storm my-auto w-full" />
                </div>
                <div className="flex text-5xl md:text-7xl md:mb-1 pt-4 tracking-[.5rem] md:tracking-heading w-full test">
                    <span className="h-line bg-storm my-auto w-full" />
                    <h1 className="ps-2 md:ps-4">OLIVEROS</h1>
                    <span className="h-line bg-storm my-auto w-full" />
                </div>

                <h2 className="text-sm lg:text-xl pb-5 test2 text-center px-3">
                    Técnico Universitario en Desarrollo Web
                </h2>

                <p className="max-w-[60ch] mx-auto text-center text-sm lg:text-lg test2 px-3">
                    Con muchas ganas de aprender y avanzar como profesional en
                    el área, siendo recién egresado de la Universidad Nacional
                    del Comahue en Neuquén, Argentina.
                </p>

                <ul className="flex justify-center gap-5 mt-10 test3">
                    <li>
                        <a href="#" title="Github">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                viewBox="0 0 496 512"
                                fill="#93A3B6"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <span className="sr-only">Github</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Linkedin">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-7 h-7"
                                fill="#93A3B6"
                            >
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                            <span className="sr-only">Linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Correo electrónico">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                viewBox="0 0 512 512"
                                fill="#93A3B6"
                            >
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <span className="sr-only">Correo electrónico</span>
                        </a>
                    </li>
                </ul>

                <GoToBottom elementID="tech" />
            </section>

            <section
                className={`md:grid grid-cols-2 w-full mx-auto md:mb-40 max-w-7xl scroll-mt-40 transition-all duration-300 px-4 md:px-6 xl:px-0 ${
                    isTechVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3"
                }`}
                id="tech"
            >
                <div className="md:border-e md:border-storm w-full md:pe-20 pb-20 md:pb-0">
                    <h1 className="text-5xl md:text-7xl tracking-heading">
                        FRONT-
                        <br />
                        END
                    </h1>

                    <div className="md:text-3xl w-full space-y-5 md:space-y-10" ref={techRef}>
                        {["React", "HTML/JS/CSS", "Bootstrap", "Tailwind"].map(
                            (element, index) => (
                                <div className="w-full flex" key={index}>
                                    <h2 className="flex justify-center items-center">
                                        {element}
                                    </h2>
                                    <span className="w-full mb-2 h-5 md:my-auto border-b-[1px] border-b-storm"></span>
                                </div>
                            )
                        )}
                        <h2 className=" md:text-lg">Aprendiendo: React Native</h2>
                    </div>
                </div>
                <div className="w-full lg:ps-20 md:ps-10">
                    <h1 className="text-5xl md:text-7xl tracking-heading">
                        BACK-
                        <br />
                        END
                    </h1>
                    <div className="md:text-3xl w-full space-y-5 md:space-y-10">
                        {["Laravel", "PHP", "MySQL", "..."].map(
                            (element, index) => (
                                <div className="w-full flex" key={index}>
                                    <h2 className="flex justify-center items-center">
                                        {element}
                                    </h2>
                                    <span className="w-full h-5 mb-2 md:my-auto border-b-[1px] border-b-storm"></span>
                                </div>
                            )
                        )}
                        <h2 className="md:text-lg">Aprendiendo: ...</h2>
                    </div>
                </div>
            </section>

            <section
                className={`transition-all duration-300 px-4 md:px-6 xl:px-0 ${
                    isWorksVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3"
                }`}
            >
                <h1 className="tracking-[1rem] text-5xl md:text-7xl md:text-center mb-10 md:mb-20 mt-20 md:mt-28">
                    PROYEC&shy;TOS
                </h1>

                <div className="w-full md:mb-48 mb-20">
                    <div
                        className="flex flex-col md:grid grid-cols-3 gap-2 w-full max-w-7xl mx-auto "
                        ref={worksRef}
                    >
                        {MAIN_WORKS.map((element, index) => (
                            <a
                                href="#"
                                key={index}
                                className={`w-full ${
                                    index === 0 || index === 3
                                        ? "col-span-2"
                                        : ""
                                }`}
                            >
                                <article
                                    className={`md:h-80 relative flex flex-col justify-between text-white p-5 w-full border-transparent hover:border-white border-4  transition-all duration-300 rounded-lg bg-gray-900 hover:-translate-y-2   `}
                                >
                                    <header className="my-5 md:my-auto md:w-28 w-14 brightness-0 invert-[1]">
                                        <img
                                            src={element?.image}
                                            loading="lazy"
                                            aria-hidden
                                        />
                                    </header>

                                    <div>
                                        <div className="w-full flex items-end">
                                            <span className=" text-2xl ">
                                                {element.name}
                                            </span>
                                            <span className="w-full h-[1px] bg-white mb-2"></span>
                                        </div>
                                        <p className="w-full max-w-[60ch] text-sm md:line-clamp-2">
                                            {element.short_description}
                                        </p>
                                        <div className="space-x-2 mt-4 text-sm md:line-clamp-1">
                                            {element.technologies.join(" - ")}
                                        </div>
                                    </div>
                                </article>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
