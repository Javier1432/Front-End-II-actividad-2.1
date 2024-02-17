import { useContext, useState } from "react"
import Busqueda from "../Busqueda"
import Filtrado from "../Filtrado"
import Paginacion from "../Paginacion"
import Tarjetas from "../Tarjetas"
import { Contexto } from "../../context/Context"


function Inventario({token}) {

    const {productos} = useContext(Contexto)

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(4);
  
    const maximo = Math.ceil(productos.length / porPagina);

    return (
        <>
            <section id="inventario" className="bg-blanco min-h-[100vh] p-12 flex flex-col gap-16">
                <h2 className="text-4xl text-primario text-center font-Montserrat font-bold">Inventario</h2>

                <div className="flex flex-col gap-6 md:flex-row">
                    <Busqueda />
                    <Filtrado />
                </div>

                <div className="flex flex-col gap-8">
                    {productos.slice(
                        (pagina - 1) * porPagina,
                        (pagina - 1) * porPagina + porPagina
                      ).map((producto, id) => (
                        <Tarjetas producto={producto} key={id} token={token} />
                      ))}

                    
                </div>

                <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}/>
            </section>
        </>
    )
}

export default Inventario