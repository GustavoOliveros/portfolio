export default function Footer() {
    return (
        <footer className="w-full bg-summer  ">
            <div className="max-w-7xl mx-auto p-20">
                <div className="flex gap-5 justify-center items-center">
                    <span className="w-5 h-5 rounded-full bg-purple"></span>
                    <span className="w-5 h-5 rounded-full bg-purple"></span>

                    <span className="w-5 h-5 rounded-full bg-purple"></span>
                </div>
                <div>
                    <p className="text-center  text-purple font-bold tracking-widest text-xl mt-20">
                        DERECHOS RESERVADOS, {new Date().getFullYear()}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
