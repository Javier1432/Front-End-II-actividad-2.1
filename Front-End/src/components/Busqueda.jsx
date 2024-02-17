import { IoSearchSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { Contexto } from "../context/Context";

function Busqueda() {

    const {setProductos, productos} = useContext(Contexto)

    const [estante, setEstante] = useState(productos)

    const autocompletado = (pal) => {
        let preguntame = estante

        if (pal.trim().length == 0) {
            return setProductos(estante)
        }
    
        const nuevoInventario = []
        for(let indice in preguntame){
            let item = preguntame[indice];
                let nombre = item.nombre;
            if(pal.length != 0 && nombre.length != 0){
                if(nombre.toLowerCase().search(pal.toLowerCase()) != -1){
                    nuevoInventario.push(item)
                }
            }
        }

        setProductos(nuevoInventario)
    }

    return (
        <>
            <div className="w-full flex justify-center">
                <form className="flex flex-col gap-1 lg:w-3/4">
                    <label className="text-2xl font-bold font-Nunito text-primario">Buscador: </label>

                    <div className="flex gap-2">
                        <input className="rounded-xl border-2 border-tono-bajo px-2 py-1/2 text-xl text-opaco w-full" 
                        type="text"  
                        placeholder="search..."
                        onChange={(e) => {
                            autocompletado(e.currentTarget.value)
                        }} />
                        <button type="submit" onClick={(e) => {
                            e.preventDefault()
                        }}>
                            <IoSearchSharp className="font-bold text-primario text-4xl"/>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Busqueda