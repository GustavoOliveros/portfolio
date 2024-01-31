export default function Contact() {
    const REDES = [
        {name: "Github", link: "https://github.com/GustavoOliveros/", icon: ""},
        {name: "LinkedIn", link: "https://www.linkedin.com/in/gustavo-oliveros-4a79b62aa/", icon: ""},
        {name: "Correo Electrónico", link: "mailto:oliverosg2909@gmail.com", icon: ""}
    ]

    return (
        <section className="fadeIn-0 mx-auto mb-20 max-w-7xl px-4 md:px-6 xl:px-0">
            <div className="space-y-4 text-sm leading-6 md:text-lg md:leading-9">
                <h1 className="text-center my-10 text-5xl font-bold tracking-[0.5rem] md:text-7xl">
                    CONTAC&shy;TO
                </h1>
                <ul className="mx-auto lg:grid lg:grid-cols-3 space-y-5 lg:space-y-0 lg:gap-5 justify-center">
                    {REDES.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-center"
                        >
                            <a href={item.link} className="border-2 border-transparent hover:border-white bg-gray-900 w-full text-center rounded-xl py-20 px-10">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
