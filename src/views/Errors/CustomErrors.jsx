export default function CustomErrors({ customError }) {
    return (
        <div className=" my-28 flex justify-center flex-col items-center space-y-5">
            <h1 className="font-bold text-2xl">Oops...</h1>

            <p>Ocurrió algo inesperado</p>
            <p className="text-gray-400 italic">{ customError }</p>

            <div className="">
                
            </div>
        </div>
    );
}
