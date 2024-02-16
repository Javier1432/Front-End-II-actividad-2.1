import { IoSearchSharp } from "react-icons/io5";
import {useContext, useState } from "react";
import { Contexto } from "../context/Context";

function Filtrado({ setInventario }) {

    const {categorias} = useContext(Contexto)

    const [filtrado, setFiltrado] = useState('');
    const [estante, setEstante] = useState('');

    const cargarFiltrado = () => {

    }

    return (
        <>
            <div className="w-full flex justify-center">
                <form className="flex flex-col gap-1 lg:w-3/4">
                    <label className="text-2xl font-bold font-Nunito text-primario">Filtrar: </label>

                    <div className="flex gap-2">
                        <select 
                        className="rounded-xl border-2 border-tono-bajo px-2 py-1/2 text-xl text-opaco w-full" 
                        type="text"
                        value={filtrado}
                        onChange={(e) => {
                            setFiltrado(e.currentTarget.value)
                        }}>
                            <option value="">Todos</option>
                            {
                                categorias.map((categoria, indice) => (
                                    <option key={indice} value={categoria}>{categoria}</option>
                                ))
                            }
                        </select>
                        <button type="submit" onClick={(e) => {
                            cargarFiltrado()
                            e.preventDefault()
                        }}>
                            <IoSearchSharp className="font-bold text-primario text-4xl" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filtrado