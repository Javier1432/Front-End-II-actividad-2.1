import { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { validacion } from "../../service/functions";
import { Contexto } from "../../context/Context";
import { info } from "../../service/alerts";

function InicioSesion({ setToken }) {

    const {setRol} = useContext(Contexto)

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const valido = validacion(usuario);
    const valido2 = validacion(password);

    function login() {
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usuario,
                password: password
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    console.log(data)
                    setRol(data.rol)
                    setToken(data.token)
                    return info('success', 'Has iniciado sesion correctamente', 'Inicio de Sesion')
                } else if (data.status === 400) {
                    return info('error', 'Fallo el inicio de Sesion', 'Inicio Fallido')
                }
                info('error', 'Fallo el inicio de Sesion', 'Inicio Fallido')
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <div className="flex flex-col gap-8 items-center justify-center w-full">
                <h1 className=" text-blanco text-4xl font-Montserrat font-bold">Login</h1>
                <form action="" className="w-full p-4 md:px-16 flex flex-col gap-4">
                    <div className="w-full">
                        <label htmlFor="usuario"
                            className="text-blanco text-md md:text-xl font-Merriweather font-bold"
                        >Usuario</label>
                        <input type="text"
                            name="usuario"
                            id="usuario"
                            className="block px-2 w-full text-sm md:text-lg text-blanco bg-transparent border-0 border-b-2 border-blanco appearance-none focus:outline-none"
                            placeholder=""
                            value={usuario}
                            onChange={e => { setUsuario(e.target.value) }}
                            required />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password"
                            className="text-blanco text-md md:text-xl font-Merriweather font-bold"
                        >Contraseña</label>
                        <input type="password"
                            name="password"
                            id="password"
                            className="block px-2 w-full text-sm md:text-lg text-blanco bg-transparent border-0 border-b-2 border-blanco appearance-none focus:outline-none"
                            placeholder=""
                            value={password}
                            onChange={e => { setPassword(e.target.value) }}
                            required />
                    </div>

                    <div className="w-full flex justify-end">
                        <button 
                        className="w-1/5 bg-primario p-2 flex items-center justify-center rounded-full" type="submit" 
                        onClick={(e) => {
                            e.preventDefault();
                            if (valido === 'Error' || valido2 === 'Error') {
                                return alert('no estan completos los campos')
                            }

                            login()
                        }}
                        >
                            <FaArrowRight className="text-blanco text-3xl" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default InicioSesion