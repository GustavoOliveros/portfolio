import { useRouteError } from "react-router-dom";

export default function Errors() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="h-screen flex justify-center flex-col items-center space-y-5">
            <h1 className="font-bold text-2xl">Oops...</h1>

            <p>Ocurrió algo inesperado</p>
            <p className="text-gray-400 italic">{ error.statusText || error.message }</p>

            <div className="">
                
            </div>
        </div>
    );
}
