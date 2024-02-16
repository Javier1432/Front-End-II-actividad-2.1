import { useState } from "react"
import InicioSesion from "./section/InicioSesion"
import Registro from "./section/Registro"

function Login({ setToken }) {

  const [formulario, setFormulario] = useState('login')

  return (
    <>
      <main className="bg-fondito h-[100vh] w-full">
        <div className="h-[100vh] w-full bg-white bg-opacity-25 p-24">
          <div className="w-full h-full bg-claro rounded-3xl flex">

            <div className="w-1/2 h-full bg-lateral bg-cover rounded-bl-3xl"></div>
            <div className="w-1/2 flex flex-col gap-16 items-center justify-center">
              <div className="flex gap-8 w-full justify-center">
                <button className="w-1/5 bg-primario p-4 text-xl text-blanco rounded-full hover:bg-secundario transition-all duration-300" onClick={(e) => {
                  setFormulario('login')
                }}>Login</button>
                <button className="w-1/5 bg-primario p-4 text-xl text-blanco rounded-full hover:bg-secundario transition-all duration-300" onClick={(e) => {
                  setFormulario('registrar')
                }}>Singup</button>
              </div>

              {formulario === 'login' ? (<InicioSesion setToken={setToken}/>) : (<Registro />)}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
