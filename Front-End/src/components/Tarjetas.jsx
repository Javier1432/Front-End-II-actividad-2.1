import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { Contexto } from "../context/Context";
import Editar from "./modal/Editar";

function Tarjetas({ producto, token }) {

    const { deleteStore, setShowModal2, rol } = useContext(Contexto)

    return (
        <>  
            <Editar producto={producto} token={token} />
            <div className="w-full min-h-[300px] bg-white rounded-2xl border-solid border-negro border-[1px] flex-col md:flex-row flex items-center">
                <div className="w-full md:w-1/3">
                    <img className='w-full md:h-[300px] rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl border-negro border-[1px]' 
                    src={`http://localhost:3000/images/${producto.imagen}`} 
                    alt="imagen-producto" />
                </div>

                <div className="w-full md:w-2/3 p-4 flex flex-col gap-4 ">
                    <div className='flex justify-center items-center'>
                        <h4 className='text-xl lg:text-2xl text-primario font-Montserrat font-bold w-full'>{producto.nombre}</h4>
                        <FaHeart className='text-2xl lg:text-3xl text-oscuro' />
                    </div>

                    <p className='text-md lg:text-lg text-negro font-Merriweather font-normal'>
                        {producto.descripcion}
                    </p>
                    <p className='text-md lg:text-lg text-negro font-Merriweather font-normal'>
                        Disponible: <b className='text-oscuro'>{producto.cantidad} Unidades</b>
                    </p>

                    <div className='flex justify-center items-center'>
                        <h5 className='text-xl lg:text-2xl text-primario font-Montserrat font-bold w-full'>${producto.precio}</h5>
                        <button 
                        className={`w-[35%] md:w-[20%] border-none p-2 text-red-700 font-black text-md lg:text-lg ${rol === 'admin' ? 'visible' : 'invisible'}`}
                        onClick={(e) => {
                            e.preventDefault()
                            deleteStore(producto.id)
                        }}
                        >
                            Eliminar
                        </button>
                        <button 
                        className={`w-[35%] md:w-[20%] border-none p-2 text-claro font-black text-md lg:text-lg ${rol === 'admin' ? 'visible' : 'invisible'}`}
                        onClick={(e) => {
                            e.preventDefault()
                            setShowModal2(true)
                        }}
                        >
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tarjetas