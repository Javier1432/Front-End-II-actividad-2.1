import { useState } from 'react'
import perfil from '../assets/perfil.png'
import { IoCloseSharp, IoMenu } from "react-icons/io5";

function Nav({ showModal, setShowModal }) {

    const links = [
        { href: '#', texto: 'Home' },
        { href: '#', texto: 'Inventario' },
        { href: '#', texto: 'Contacto' },
        { href: '#', texto: 'Agregar' }
    ]

    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav className="bg-blanco h-[10vh]">
                <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between p-4 border-b-2 mx-4 lg:mx-16">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-4xl font-bold whitespace-nowrap text-primario font-Montserrat">SkyBlue</span>
                    </a>
                    <div className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm rounded-full text-primario invisible lg:visible" onClick={
                            (e) => {
                                info('info', 'Proximamente tendremos registro de usuarios', 'Seccion de Usuario')
                            }
                        }>
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full visible" src={perfil} alt="user photo" />
                        </button>
                        <button type="button" className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-primario rounded-lg lg:hidden hover:text-primario hover:bg-opaco focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200" onClick={() => {
                            setMenu(true)
                        }}>
                            <span className="sr-only">Open main menu</span>
                            <IoMenu className='text-6xl' />
                        </button>
                    </div>
                    <div className={`items-center justify-between fixed h-full bg-blanco ${menu ? "right-0" : "-right-full"} top-0 w-full transition-all duration-500 lg:right-0 lg:relative lg:flex lg:w-auto lg:order-1`}>
                        <span className='flex w-full flex-row-reverse p-4 lg:hidden'>
                            <IoCloseSharp className='text-4xl hover:cursor-pointer hover:text-primario transition-all duration-200' onClick={() => {
                                setMenu(false)
                            }} />
                        </span>
                        <ul className="flex flex-col text-center text-md font-Merriweather text-opaco font-semibold p-4 lg:p-0 mt-4 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-blanco">
                            {links.map((link, id) => (
                                <li key={id}>
                                    <a href={link.href} className="block py-2 px-3 rounded hover:text-primario hover:bg-gray-100 lg:hover:bg-transparent transition-all duration-500">{link.texto}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav