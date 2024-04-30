import RepresentativeContainer from './templates/components/utils/representatives/RepresentativeContainer';
import ProyectosPersonales from './templates/proyectosPersonales/proyectosPersonales';
import LenguajesBoard from '/src/templates/lenguajesBoard/LenguajesBoard.jsx'

const MisConocimientos = () => {
  return(`He tenido la oportunidad de probar el Front-end y Back-end por igual en todo mi recorrido estudiantil. Más, sin embárgo, he enfocado mi tiempo a experimentar con el Front-end por más tiempo. Sin mbargo, lo dicho anteriormente no significa que no pueda ejercer como Back-end.`)
}


function App() {

  return (
    <>
      <header></header>
      <main className="bg-stone-200">
        {/* SECTION: HERO */}
        <section className="h-screen flex flex-col bg-stone-200">
          <article className="h-5/6 w-full flex align-middle items-center justify-center flex-col">
            <span className="text-4xl text-rose-600">Programador Web</span>
            <h1 className="text-8xl font-bold">ANDRES CORDOBA</h1>
            <RepresentativeContainer />
          </article>
          <article className="w-full h-1/6 flex align-middle items-center justify-center flex-col">
            <p className="text-5xl codigoBarrasLetras">Siempre en busqueda de un diseno diferente</p>
          </article>
        </section>
        {/* SECTION: LENGUAJES */}
        <section className="flex text-start align-middle justify-center flex-col gap-10 py-20 px-52 bg-stone-100">
          <article className="w-full flex flex-col items-start justify-center">
            <h1 className="text-4xl font-bold text-rose-600 border-b-2 border-stone-200 mb-3">LENGUAJES QUE CONCOZCO</h1>
            <p className="text-xl">
              <MisConocimientos />
            </p>
          </article>
          <article className="bg-stone-200 h-132 border-2 border-stone-500">
            <LenguajesBoard />
          </article>
        </section>
        <ProyectosPersonales />
      </main>
      <footer></footer>
    </>
  )
}

export default App
