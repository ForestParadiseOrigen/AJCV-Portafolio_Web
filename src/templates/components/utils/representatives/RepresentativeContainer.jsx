import RepresentativeData from "../../data/RepresentativeData.jsx";
import Representative from "./representativeObject/Representative.jsx";

const RepreData = RepresentativeData(); // Acceder a la propiedad 'data'
const RepresentativeContainer = () => {
    const jsonData = JSON.stringify(RepreData); // Convierte a cadena JSON
    const parsedData = JSON.parse(jsonData); // Convierte de nuevo a objeto JavaScript

    return(
        <section className='w-full flex align-middle items-center justify-center flex-row gap-10 py-6'>
            {parsedData.map((data) => (
                <Representative Key={data} data={data} />
            ))}
        </section>
    );3
}

export default RepresentativeContainer;
