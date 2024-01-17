import QUALIFICATIONS from '../../data/qualifications.json';

export default function About() {
    return (
        <>
            <section className="fadeIn-0 mx-auto my-10 max-w-7xl px-4 md:px-6 xl:px-0">
                <div className="flex flex-col-reverse gap-10 md:grid md:grid-cols-2">
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
                    </div>
                    <div
                        className="rounded-xl bg-gray-800 bg-cover aspect-video md:aspect-auto"
                        style={{
                            backgroundImage:
                                'url(https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg)'
                        }}
                    />
                </div>
            </section>

            <section className="fadeIn-0 mx-auto my-20 max-w-7xl px-4 md:px-6 xl:px-0">
                <div className="space-y-4 text-sm leading-6 md:text-lg md:leading-9">
                    <h1 className="text-center text-5xl font-bold tracking-[0.5rem] md:text-7xl">
                        ESTU&shy;DIOS
                    </h1>
                    <ol class="relative mx-auto max-w-[60ch] border-s border-summer dark:border-summer">
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

            <section className="fadeIn-0 mx-auto my-20 max-w-7xl px-4 md:px-6 xl:px-0">
                <div className="space-y-4 text-sm leading-6 md:text-lg md:leading-9">
                    <h1 className="text-center text-5xl font-bold tracking-[0.5rem] md:text-7xl">
                        INTERE&shy;SES
                    </h1>
                    <ul class="mx-auto flex max-w-[60ch] flex-wrap justify-center">
                        {[
                            'Aprendizaje',
                            'Entretenimiento',
                            'Proyectos',
                            'Idiomas',
                            'Planificación',
                            'Diseño',
                            'APIs',
                            'Datos'
                        ].map((item) => (
                            <li
                                key={item}
                                className="rounded-full border border-white px-4 py-2"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="fadeIn-0 mx-auto my-20 max-w-7xl px-4 md:px-6 xl:px-0">
                <div className="space-y-4 text-sm leading-6 md:text-lg md:leading-9">
                    <h1 className="text-center text-5xl font-bold tracking-[0.5rem] md:text-7xl">
                        CUALIDA&shy;DES
                    </h1>
                    <ul class="mx-auto flex max-w-[60ch] flex-wrap justify-center">
                        {['Creatividad', 'Disposición', 'Respeto'].map(
                            (item) => (
                                <li
                                    key={item}
                                    className="rounded-full border border-white px-4 py-2"
                                >
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}
