import QUALIFICATIONS from '../../data/qualifications.json';

export default function About() {
    return (
        <>
            <section className="fadeIn-0 mx-auto mt-6 max-w-7xl px-4 md:px-6 xl:px-0">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2">
                    <div className="space-y-4 text-sm leading-6 md:text-lg md:leading-8">
                        <h1 className="text-5xl font-bold tracking-[0.5rem] md:text-7xl">
                            SOBRE MI
                        </h1>
                        <p>
                            Soy apasionado del mundo de la informática cuya
                            travesía en el mundo digital ha sido una emocionante
                            mezcla de creatividad y código. Mi historia en el
                            desarrollo web ha estado marcada por la dedicación a
                            entender las complejidades del lenguaje de la web y
                            convertirlas en experiencias atractivas y
                            funcionales.
                        </p>
                        <p>
                            Desde los cimientos de HTML hasta la magia
                            interactiva de JavaScript, me sumerjo en el código
                            con entusiasmo, dando vida a proyectos web que van
                            más allá de lo estándar. Mi travesía tecnológica
                            incluye no solo la maestría en herramientas como
                            React, sino también la habilidad de adaptarme a las
                            últimas tendencias que reinventan constantemente el
                            panorama del desarrollo web.
                        </p>
                        <img src="#/img/GUSTAVO_OLIVEROS.png" alt="asdfasd" />
                    </div>
                </div>
            </section>

            <section className="fadeIn-0 mx-auto max-w-7xl px-4 my-20 md:px-6 xl:px-0">
                <div className="space-y-4 text-sm leading-6 md:text-lg md:leading-9">
                    <h1 className="text-5xl text-center font-bold tracking-[0.5rem] md:text-7xl">
                        ESTUDIOS
                    </h1>
                    <ol class="relative max-w-[60ch] mx-auto border-s border-summer dark:border-summer">
                        {QUALIFICATIONS.map((item, index) => (
                            <li key={index} class="mb-10 ms-4">
                                <div class="absolute -start-1.5 mt-3 h-3 w-3 rounded-full border border-summer bg-summer"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-storm">
                                    {item.period}
                                </time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.name}
                                </h3>
                                <p class="mb-4 text-base font-normal text-storm">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
}
