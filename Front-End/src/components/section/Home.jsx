import image from '../../assets/traslados-simples.png'
import Buttom from '../Buttom'

function Home() {

    return (
        <>
            <section className="bg-blanco h-[125vh] md:h-[90vh] lg:h-[100vh] flex flex-col justify-center md:flex-row px-4 lg:px-16 ">
                <div className="w-full md:w-3/5 md:h-full p-4 flex flex-col justify-center gap-8">
                    <h1 className="text-primario text-2xl md:text-4xl font-bold font-Montserrat lg:text-5xl">Tu confiable inventario de oportunidades</h1>
                    <p className="text-negro text-xl md:text-2xl lg:text-3xl font-Merriweather font-normal w-2/3">Descubre el cielo de las oportunidades y un mundo de oportunidades con SkyBlue</p>
                    <p className="text-primario text-xl md:text-2xl lg:text-3xl font-Merriweather font-black">Intenvario / Categorias / Favoritos</p>

                    <div className='w-2/3 md:w-1/3'>
                        <Buttom texto={'Explorar'} className={'bg-secundario p-8 text-xl text-blanco'} />
                    </div>
                </div>

                <div className="w-full md:w-2/5 md:h-full flex items-center">
                    <img className='w-full' src={image} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home