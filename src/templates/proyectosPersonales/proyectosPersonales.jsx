import ProyectosModel from './../components/models/proyectos/proyectosModel';
import ProyectosData from '../components/data/ProyectosData';
import { parse } from 'postcss';

const PData = ProyectosData;

const ProyectosPersonales = () => {

    const jsonData = JSON.stringify(PData); // Convierte a cadena JSON
    const parsedData = JSON.parse(jsonData); // Convierte de nuevo a objeto JavaScript
    
    return(
        <>
            {/* SECTION: MIS PROYECTOS PERSONALES */}
            <section className="scrollBarProyectos flex text-start align-middle justify-center flex-col gap-10 py-20 px-52 bg-zinc-900">
              <article className="w-full flex flex-col justify-center  text-center">
                <h1 className=' text-4xl font-bold text-rose-600 border-b-2 border-stone-400 mb-3  text-center'>MIS PROYECTOS PERSONALES</h1>
                <p className='text-xl text-white'>No tengo muchos, pero tengo diferentes ideas. Todo esta enlazado a mi repoditorio de GitHub.</p>
              </article>
              <article className='flex flex-row overflow-x-auto gap-14'>
                {
                  parsedData.map((data) => (
                      <ProyectosModel key={data} data={data} />
                  ))
                }
              </article>
            </section>
        </>
    );
}

export default ProyectosPersonales;