import './proyectosStyles.css'

const ProyectosModel = ({data}) => {
    return(
        <section key={data.id} className="w-128">
            <header className="flex flex-row items-end w-full py-1 justify-end cursor-default">
                <span className="after:duration-500 duration-500 border-2 border-rose-600 px-1 hover:bg-rose-600 text-white">{data.state}</span>
            </header>

            <section className=" border-y-2 border-rose-600 p-1 flex flex-row flex-nowrap gap-1">
                <section className="">
                    <article className="flex flex-row flex-nowrap gap-2">
                        <svg className=" bg-rose-600 w-fit" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="m13.061 4.939-2.122 2.122L15.879 12l-4.94 4.939 2.122 2.122L20.121 12z"></path><path fill="white" d="M6.061 19.061 13.121 12l-7.06-7.061-2.122 2.122L8.879 12l-4.94 4.939z"></path></svg>
                        <h1 className="text-white text-2xl font-semibold p-2 bg-rose-600 text-nowrap w-full">{data.nombre}</h1>
                    </article>
                    <article>
                        <p className="text-md py-2 h-24 overflow-y-auto text-white">{data.descripcion}</p>
                    </article>
                </section>
                <aside className="hover:bg-rose-600 hover:text-white text-md bg-white p-1 text-vertical whitespace-nowrap font-semibold" href="https://boxicons.com/?query=che"><a href={data.link}>GITHUB</a></aside>
            </section>

            <footer className="flex flex-row justify-end">
                <img src="/src/assets/img/QR/SVG/danger-line.svg"/>
            </footer>
        </section>
    );
}

export default ProyectosModel;