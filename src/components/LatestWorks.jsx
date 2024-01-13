import MAIN_WORKS from '../data/main_works.json';
import { Link } from 'react-router-dom';

export default function LatestWorks() {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 md:grid md:grid-cols-3 ">
            {MAIN_WORKS.map((element, index) => (
                <Link
                    to={`/work/${element.id}`}
                    key={index}
                    className={`w-full ${
                        index === 0 || index === 3 ? 'md:col-span-2' : ''
                    }`}
                >
                    <article
                        className={`relative flex w-full flex-col justify-between rounded-lg border-4 border-transparent bg-gray-900 p-5 text-white  transition-all duration-300 hover:border-white md:h-80   `}
                    >
                        <header className="my-5 w-14 brightness-0 invert-[1] md:my-auto md:w-28">
                            <img
                                src={element?.image}
                                loading="lazy"
                                aria-hidden
                            />
                        </header>

                        <div>
                            <div className="flex w-full items-end">
                                <span className=" text-2xl ">
                                    {element.name}
                                </span>
                                <span className="mb-2 h-[1px] w-full bg-white"></span>
                            </div>
                            <p className="w-full max-w-[60ch] text-sm md:line-clamp-2">
                                {element.short_description}
                            </p>
                            <div className="mt-4 space-x-2 text-sm md:line-clamp-1">
                                {element.technologies.join(' - ')}
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}
