import { useParams } from "react-router-dom";
import MAIN_WORKS from "../../data/main_works.json";
import CustomErrors from "../Errors/CustomErrors";

export default function Work({}) {
    const { workId } = useParams();

    const work = MAIN_WORKS.filter((object) => object.id === workId);

    if (work.length === 0) {
        return <CustomErrors customError="No se encontró el proyecto." />;
    }

    return <>{JSON.stringify(work)}</>;
}
