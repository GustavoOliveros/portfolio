import { useParams } from 'react-router-dom';
import MAIN_WORKS from '../../data/main_works.json';
import CustomErrors from '../Errors/CustomErrors';
import ScreenshotsGallery from './partials/ScreenshotsGallery';

export default function Work({}) {
    const { workId } = useParams();

    const work = MAIN_WORKS.filter((item) => item.id === workId);

    if (work.length === 0) {
        return <CustomErrors message="No se encontró el proyecto." />;
    }

    return (
        <section className="fadeIn-0 mx-auto mb-20 max-w-7xl px-4 md:grid md:grid-cols-2 md:px-6 xl:px-0">
            <div>
                <h1 className="my-10 text-5xl tracking-[.5rem] md:my-5 md:text-7xl lg:tracking-heading">
                    {work[0].name.toUpperCase()}
                </h1>
                <div className='space-y-4'>
                <p>
                    {work[0].short_description} Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Recusandae suscipit soluta cum
                    est tenetur distinctio officiis, quod odio quae reiciendis
                    molestias sequi quidem molestiae minus adipisci eius animi?
                </p>
                <p >
                    Odio, quibusdam voluptatum magnam quos autem dignissimos
                    ipsa dolorem deleniti magni provident unde molestias? Fugit
                    eaque atque dolores iste placeat fugiat numquam rem facere.
                    Cum delectus animi iure iusto quas.
                </p>
                <p>
                    Beatae, iure tempore doloremque iste laudantium itaque
                    consectetur excepturi earum a temporibus delectus, esse
                    praesentium molestiae incidunt distinctio natus minus modi?
                    Veniam similique ex ipsum minima quia. Iusto error
                    temporibus officiis, recusandae atque itaque repellat in
                    nihil corporis dignissimos repudiandae commodi soluta?{' '}
                </p>
                </div>
                <div className="mt-4 space-x-2 text-sm text-white md:line-clamp-1">
                    {work[0].technologies.join(' - ')}
                </div>
            </div>
            <div>
                <ScreenshotsGallery />
            </div>
        </section>
    );
}
