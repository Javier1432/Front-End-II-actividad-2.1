import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

function Busqueda({setInventario}) {

    const [estante, setEstante] = useState([])

    const autocompletado = (pal) => {
        let preguntame = estante

        if (pal.trim().length == 0) {
            return setInventario(estante)
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