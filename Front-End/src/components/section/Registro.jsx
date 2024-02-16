import { FaArrowRight } from "react-icons/fa";
import { validacion } from "../../service/functions";
import { useState } from "react";

function Registro() {

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [password, setPassword] = useState('');

    const valido = validacion(usuario)
    const valido2 = validacion(email)
    const valido3 = validacion(password)
    const valido4 = validacion(confirm)

    return (
        <>
            <div className="flex flex-col gap-8 items-center justify-center w-full">
                <h1 className=" text-blanco text-4xl font-Montserrat font-bold">Singup</h1>
                <form action="" className="w-full px-16 flex flex-col gap-4">
                    <div className="w-full">
                        <label htmlFor="usuario"
                            className="text-blanco text-xl font-Merriweather font-bold"
                        >Usuario</label>
                        <input type="text"
                            name="usuario"
                            id="usuario"
                            className="block px-2 w-full text-lg text-blanco bg-transparent border-0 border-b-2 border-blanco appearance-none focus:outline-none"
                            placeholder=""
                            value={usuario}
                            onChange={e => { setUsuario(e.target.value) }}
                            required />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email"
                            className="text-blanco text-xl font-Merriweather font-bold"
                        >Correo</label>
                        <input type="email"
                            name="email"
                            id="email"
                            className="block px-2 w-full text-lg text-blanco bg-transparent border-0 border-b-2 border-blanco appearance-none focus:outline-none"
                            placeholder=""
                            value={email}
                            onChange={e => { setEmail(e.target.value) }}
                            required />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password"
                            className="text-blanco text-xl font-Merriweather font-bold"
                        >Contraseña</label>
                        <input type="password"
                            name="password"
                            id="password"
                            className="block px-2 w-full text-lg text-blanco bg-transparent border-0 border-b-2 border-blanco appearance-none focus:outline-none"
                            placeholder=""
                            value={password}
                            onChange={e => { setPassword(e.target.value) }}
                            required />
                    </div>
                    <div className="w-full">
                        <label htmlFor="confirm"
                            className="text-blanco text-xl font-Merriweather font-bold"
                        > Confirmar Contraseña</label>
                        <input type="password"
                            name="confirm"
                            id="confirm"
                            className="block px-2 w-full text-lg text-blanco bg-transparent border-0 border-b-2 border-blanco appearance-none focus:outline-none"
                            placeholder=""
                            value={confirm}
                            onChange={e => { setConfirm(e.target.value) }}
                            required />
                    </div>

                    <div className="w-full flex justify-end">
                        <button 
                        className="w-1/5 bg-primario p-2 flex items-center justify-center rounded-full" type="submit" 
                        onClick={(e) => {
                            e.preventDefault();
                            if (valido === 'Error' || valido2 === 'Error' || valido3 === 'Error' || valido4 === 'Error') {
                                return alert('no estan completos los campos')
                            }

                            if (password != confirm) {
                                return alert('la contraseña deben coincidir')
                            }
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

export default Registro