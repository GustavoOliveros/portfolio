import { useRouteError } from 'react-router-dom';

export default function Errors() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-5">
            <h1 className="text-2xl font-bold">Oops...</h1>

            <p>Ocurrió algo inesperado</p>
            <p className="italic text-gray-400">
                {error.statusText || error.message}
            </p>

            <div className=""></div>
        </div>
    );
}
