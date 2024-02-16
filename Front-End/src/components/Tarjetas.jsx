import imagen from '../assets/gaming.jpg'
import { FaHeart } from "react-icons/fa";
import Buttom from './Buttom';

function Tarjetas() {

    return (
        <>
            <div className="w-full min-h-[300px] bg-white rounded-2xl border-solid border-negro border-[1px] flex-col md:flex-row flex items-center">
                <div className="w-full md:w-1/3">
                    <img className='w-full md:h-[300px] rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl border-negro border-[1px]' src={imagen} alt="" />
                </div>

                <div className="w-full md:w-2/3 p-4 flex flex-col gap-4 ">
                    <div className='flex justify-center items-center'>
                        <h4 className='text-xl lg:text-2xl text-primario font-Montserrat font-bold w-full'>LAPTO TUF</h4>
                        <FaHeart className='text-2xl lg:text-3xl text-oscuro' />
                    </div>

                    <p className='text-md lg:text-lg text-negro font-Merriweather font-normal'>
                        SGIN 17 inch Laptop, Laptops Computer 4GB RAM 128GB SSD with Intel Core i3-5005U Processor(Up to 2.4GHz), Webcam, WiFi, USB 3.2, Type-C, Mini HDMI, 8000Wh Battery
                    </p>
                    <p className='text-md lg:text-lg text-negro font-Merriweather font-normal'>
                        Disponible: <b className='text-oscuro'>400 Unidades</b>
                    </p>

                    <div className='flex justify-center items-center'>
                        <h5 className='text-xl lg:text-2xl text-primario font-Montserrat font-bold w-full'>$1200</h5>
                        <Buttom texto={'Eliminar'} className={'w-[35%] md:w-[20%] border-none p-2 text-red-700 font-black text-md lg:text-lg'}/>
                        <Buttom texto={'Editar'} className={'w-[35%] md:w-[20%] border-none p-2 text-claro font-black text-md lg:text-lg'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tarjetas