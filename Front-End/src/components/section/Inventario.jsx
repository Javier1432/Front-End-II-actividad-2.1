import Busqueda from "../Busqueda"
import Filtrado from "../Filtrado"
import Paginacion from "../Paginacion"


function Inventario() {


    return (
        <>
            <section className="bg-blanco min-h-[100vh] p-12 flex flex-col gap-16">
                <h2 className="text-4xl text-primario text-center font-Montserrat font-bold">Inventario</h2>

                <div className="flex flex-col gap-6 md:flex-row">
                    <Busqueda />
                    <Filtrado />
                </div>

                <div>

                </div>

                <Paginacion />
            </section>
        </>
    )
}

export default Inventario