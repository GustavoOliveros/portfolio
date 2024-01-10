import MAIN_WORKS from '../data/main_works.json'
import { Link } from 'react-router-dom';

export default function LatestWorks() {
    return (
        <div className="flex flex-col md:grid grid-cols-3 gap-2 w-full max-w-7xl mx-auto ">
            {MAIN_WORKS.map((element, index) => (
                <Link
                    to={`/work/${element.id}`}
                    key={index}
                    className={`w-full ${
                        index === 0 || index === 3 ? "col-span-2" : ""
                    }`}
                >
                    <article
                        className={`md:h-80 relative flex flex-col justify-between text-white p-5 w-full border-transparent hover:border-white border-4  transition-all duration-300 rounded-lg bg-gray-900   `}
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
                </Link>
            ))}
        </div>
    );
}
