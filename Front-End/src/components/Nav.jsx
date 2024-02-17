import { useContext, useState } from 'react'
import perfil from '../assets/perfil.png'
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Contexto } from '../context/Context';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Nav({ token, setToken }) {

    const {setShowModal, rol} = useContext(Contexto)

    const links = [
        { href: '#home', texto: 'Home' },
        { href: '#inventario', texto: 'Inventario' },
        { href: '#contacto', texto: 'Contacto' }
    ]

    const [menu, setMenu] = useState(false);

    function logout() {
        fetch("http://localhost:3000/user/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'BEARER ' + token
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    console.log(data)
                    setToken('')
                } else if (data.status === 400) {
                    alert('tenemos un error')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <nav className="bg-blanco h-[10vh]">
                <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between p-4 border-b-2 mx-4 lg:mx-16">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-4xl font-bold whitespace-nowrap text-primario font-Montserrat">SkyBlue</span>
                    </a>
                    <div className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm rounded-full text-primario invisible lg:visible">
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="relative flex rounded-full text-sm focus:outline-none">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={perfil}
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <span
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        logout()
                                                    }}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign out
                                                </span>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
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
                            <li>
                                <button className={`block py-2 px-3 rounded hover:text-primario hover:bg-gray-100 lg:hover:bg-transparent transition-all duration-500 ${rol === 'admin' ? 'visible' : 'invisible'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowModal(true)
                                }}
                                >Agregar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav