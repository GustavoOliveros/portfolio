import useOnTop from "../../hooks/useOnTop";
import MAIN_WORKS from "../../data/main_works.json";

export default function Home() {
    const onTop = useOnTop();

    return (
        <>
            <div className="h-[100vh] w-full ">
                <section className=" flex justify-center items-center flex-col h-full w-full">
                    <div className="flex justify-center flex-col text-center w-full">
                        <div className=" w-full text-xl md:text-7xl flex  tracking-[1rem] mb-1     pt-4 ">
                            <span className="bg-storm my-auto  w-full h-[1px]"></span>
                            <h1 className="ps-4">GUSTAVO</h1>
                            <span className="bg-storm my-auto  w-full h-[1px]"></span>
                        </div>
                        <div className=" w-full text-xl md:text-7xl flex  tracking-[1rem] mb-1     pt-4 ">
                            <span className="bg-storm my-auto  w-full h-[1px]"></span>
                            <h1 className="ps-4">OLIVEROS</h1>
                            <span className="bg-storm my-auto  w-full h-[1px]"></span>
                        </div>
                        <h2 className="pb-5 text-sm lg:text-xl ">
                            Técnico Universitario en Desarrollo Web
                        </h2>
                        <p className="max-w-[60ch] mx-auto">
                            Con bases full stack, estoy dispuesto a aprender y a
                            avanzar como profesional en el área, siendo recién
                            egresado de la Universidad Nacional del Comahue en
                            Neuquén, Argentina.
                        </p>
                        <ul className="flex gap-5 mt-10 justify-center">
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
                                    <span className="sr-only">
                                        Correo electrónico
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <a
                        className={`rounded-full w-12 h-12 bg-storm hover:bg-white scroll-mt-10 flex justify-center items-center absolute bottom-10 animate-bounce transition-all duration-200 ${
                            !onTop ? "opacity-0 cursor-default" : null
                        } `}
                        href="#tech"
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
                </section>
            </div>

            <div
                className="grid grid-cols-2 w-full mx-auto mb-20 max-w-7xl scroll-mt-40"
                id="tech"
            >
                <div className="border-e border-storm w-full pe-20">
                    <h1 className="text-xl md:text-7xl tracking-[1rem]">
                        FRONT-
                        <br />
                        END
                    </h1>

                    <ul className="md:text-3xl w-full">
                        {["React", "HTML/JS/CSS", "Bootstrap", "Tailwind"].map(
                            (element, index) => (
                                <div className="w-full flex" key={index}>
                                    <li className="h-20 flex justify-center items-center">
                                        {element}
                                    </li>
                                    <span className="w-full h-5 my-auto border-b-[1px] border-b-storm"></span>
                                </div>
                            )
                        )}
                    </ul>
                </div>
                <div className="w-full md:ps-20">
                    <h1 className="text-xl md:text-7xl tracking-[1rem]">
                        BACK-
                        <br />
                        END
                    </h1>
                    <ul className="md:text-3xl w-full">
                        {["Laravel", "PHP", "MySQL", ""].map(
                            (element, index) => (
                                <div className="w-full flex" key={index}>
                                    <li className="h-20 flex justify-center items-center">
                                        {element}
                                    </li>
                                    <span className="w-full h-5 my-auto border-b-[1px] border-b-storm"></span>
                                </div>
                            )
                        )}
                    </ul>
                </div>
            </div>

            {/* <div className="bg-summer py-10 w-full">
                <h1 className=" w-full text-7xl flex  tracking-[1rem] mb-1     pt-4 ">
                    <span className="bg-purple my-auto  w-full h-[1px]"></span>
                    <span className="ps-4 text-purple">PROYECTOS</span>
                    <span className="bg-purple my-auto  w-full h-[1px]"></span>
                </h1>
            </div> */}
            <h1 className="tracking-[1rem] text-xl md:text-7xl   text-center mb-10 mt-28">PROYECTOS</h1>

            <div className="w-full mb-48">
                <div className="">
                    <div className="md:grid grid-cols-3 gap-3 w-full max-w-7xl mx-auto ">
                        {MAIN_WORKS.map((element, index) => (
                            <a
                                href="#"
                                key={index}
                                className={`h-80 bg-center flex flex-col justify-end text-white px-5 pb-5 w-full border-transparent hover:border-white border-4 transition-all duration-300 rounded-lg bg-${
                                    element.color
                                }  ${
                                    index === 0 || index === 3
                                        ? "col-span-2"
                                        : null
                                }`}
                            >
                                <div className="w-full flex items-end">
                                    <span className=" text-2xl ">
                                        {element.name}
                                    </span>
                                    <span className="w-full h-[1px] bg-white mb-2"></span>
                                </div>
                                <p className="w-full max-w-[60ch]">
                                    {element.short_description}
                                </p>
                                <div className="space-x-2 mt-4">
                                    {element.technologies.join(' - ')}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
