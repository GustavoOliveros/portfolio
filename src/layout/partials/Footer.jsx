import { AddCircleSVGIcon } from "@react-md/material-icons";

export default function Footer() {
    return (
        <footer className="w-full bg-sand  ">
            <div className="max-w-7xl mx-auto p-10">
            <div className="flex gap-3 justify-center items-center">
                <AddCircleSVGIcon className="w-7 h-7" />
                <AddCircleSVGIcon className="w-7 h-7" />
                <AddCircleSVGIcon className="w-7 h-7" />
                <AddCircleSVGIcon className="w-7 h-7" />
                <AddCircleSVGIcon className="w-7 h-7" />
            </div>
            <div>
                <p className="text-center text-sm text-gray-700 mt-5">Derechos Reservados, {new Date().getFullYear()}.</p>
            </div>
            </div>
        </footer>
    );
}
