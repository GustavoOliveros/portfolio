import { useParams } from 'react-router-dom';
import MAIN_WORKS from '../../data/main_works.json';
import CustomErrors from '../Errors/CustomErrors';
import Carousel from './partials/Carousel';
import PrimaryButton from '../../components/PrimaryButton.JSX';

export default function Work({}) {
    const { workId } = useParams();

    // TODO: revisar si se puede hacer sin el filter
    const work = MAIN_WORKS.filter((item) => item.id === workId);

    if (work.length === 0) {
        return <CustomErrors message="No se encontró el proyecto." />;
    }

    // TODO: Agregar capturas de los proyectos y descripciones al JSON
    const slides = [
        'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
        'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
        'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg',
        'https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg'
    ];

    return (
        <section className="fadeIn-0 mx-auto mb-20 mt-10 max-w-7xl md:mt-0">
            {/* Header */}
            <div className="mx-auto mb-5 max-w-5xl px-4 text-center md:px-6 xl:px-0">
                <div className="flex items-end">
                    <hr className="mb-4 w-full border-summer md:mb-5" />
                    <h1 className="ms-3 text-4xl tracking-[.5rem] md:ms-5 md:text-7xl lg:tracking-heading">
                        {work[0].name.toUpperCase()}
                    </h1>
                    <hr className="mb-4 w-full border-summer md:mb-5" />
                </div>
                <p className="mx-auto max-w-[60ch] text-sm md:text-lg">
                    {work[0].short_description}
                </p>
            </div>

            {/* Carousel */}
            {/* <div className="max-w-7xl">
                <Carousel>
                    {slides.map((item, index) => (
                        <img key={index} src={item} />
                    ))}
                </Carousel>
            </div> */}

            {/* Wrapper contenido */}
            <div className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-4 md:px-6 lg:grid lg:grid-cols-3 xl:px-0">
                {/* Descripción detallada */}
                <div className="col-span-2">
                    <div className="mx-auto lg:mt-10">
                        <div className="mb-10 space-y-4 text-sm leading-6 md:text-lg md:leading-9">
                            <p>Próximamente...</p>
                        </div>
                    </div>
                </div>

                {/* Técnologías y link a GitHub */}
                <div>
                    <div className="mb-5 mt-5 rounded-xl bg-gray-900 p-5 lg:mt-10">
                        <div className="flex items-end">
                            <h2 className="mb-2 text-2xl text-white">
                                Tecnologías
                            </h2>
                            <hr className="mb-4 w-full" />
                        </div>

                        <ul className="my-4 flex flex-wrap gap-2">
                            {work[0].technologies.map((item, index) => (
                                <li
                                    className="rounded-full border border-white px-3 py-1 text-sm"
                                    key={index}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a href={work[0].github_link} target='_blank' title={`Código fuente de ${work[0].name}`}>
                        <PrimaryButton className="flex w-full items-center justify-center gap-2 p-5 text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                viewBox="0 0 496 512"
                                fill="#130F40"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            Código Fuente
                        </PrimaryButton>
                    </a>
                </div>
            </div>
        </section>
    );
}
