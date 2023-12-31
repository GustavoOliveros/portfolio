import Logo from "@/components/Logo";
import Layout from "../../layout/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="h-[80vh] grid grid-cols-2 justify-between  relative">
                <div className="flex justify-center flex-col">
                    <h1 className="text-7xl font-bold pb-1 bg-gradient-to-r from-[#07CB4A] via-[#F0AF04] to-[#07CB4A] bg-clip-text background-animate text-transparent">
                        Gustavo Oliveros
                    </h1>
                    <h2 className="pb-5 text-xl">
                        Técnico Universitario en Desarrollo Web
                    </h2>
                    <p className="w-[60ch]">
                        Con bases full stack, estoy dispuesto a aprender y a
                        avanzar como profesional en el área, siendo recién
                        egresado de la Universidad Nacional del Comahue en
                        Neuquén, Argentina.
                    </p>
                </div>
                <div className="rounded-full bg-[#EEEADD] mx-auto absolute bottom-0 left-[50%] animate-bounce p-4">???</div>
            </div>
            

        </Layout>
    );
}
