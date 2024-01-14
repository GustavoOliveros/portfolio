import { useState, useEffect } from 'react';

const Carousel = ({
    children: slides,
    autoSlide = true,
    autoSlideInterval = 3000
}) => {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    // TODO: Agregar controles tipo Slide, agregar iconos de flecha

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="rounded-full bg-white/80 p-3  text-gray-800 shadow hover:bg-white"
                >
                    {'<-'}
                </button>
                <button
                    onClick={next}
                    className="rounded-full bg-white/80 p-3 text-gray-800 shadow hover:bg-white"
                >
                    {'->'}
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((s, i) => (
                        <div
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full bg-white transition-all  ${curr === i ? 'p-0.5' : 'bg-opacity-50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
