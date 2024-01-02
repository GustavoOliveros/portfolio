import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        {
            id: 1,
            title: "Nivel de inglés",
        },
        {
            id: 2,
            title: "Nivel de a",
        },
        ,
        {
            id: 3,
            title: "Nivel de s",
        },
    ];

    return (
        <>
            <h1 className="text-6xl font-bold text-center">Cualidades</h1>
            <div className="grid grid-cols-3 gap-5 text-3xl font-bold">
                <div className="col-span-2 w-full bg-lime rounded-lg p-10 mt-10">
                    Nivel de inglés
                </div>
                <div className="w-full bg-lime rounded-lg p-10 mt-10">
                    Full-stack
                </div>

                <div className=" w-full bg-lime rounded-lg p-10">
                    Disponibilidad a tiempo completo
                </div>
                <div className="w-full bg-lime rounded-lg p-10">
                    Creatividad
                </div>
                <div className=" w-full bg-lime rounded-lg p-10">
                    Disposición total a aprender
                </div>

                <div className=" w-full bg-lime rounded-lg p-10">
                    Disposición total a aprender
                </div>
                <div className="col-span-2 w-full bg-lime rounded-lg p-10 ">
                    Disposición total a aprender
                </div>
            </div>
        </>
    );
}
