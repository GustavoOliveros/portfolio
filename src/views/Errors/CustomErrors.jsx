export default function CustomErrors({ message }) {
    return (
        <div className=" my-28 flex flex-col items-center justify-center space-y-5">
            <h1 className="text-2xl font-bold">Oops...</h1>

            <p>Ocurrió algo inesperado</p>
            <p className="italic text-gray-400">{message}</p>

            <div className=""></div>
        </div>
    );
}
