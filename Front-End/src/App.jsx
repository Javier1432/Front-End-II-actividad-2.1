import { useState } from "react"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./components/section/Home"
import Info from "./components/section/Info"
import Inventario from "./components/section/Inventario"
import Login from "./components/Login"
import { ContextoProvider } from "./context/Context"
import Formulario from "./components/modal/Formulario"

function App() {

  const [token, setToken] = useState('')

  if (token == '') {
    return (<ContextoProvider>
      <Login setToken={setToken} />
    </ContextoProvider>)
  } else {
    return (
      <>
        <ContextoProvider token={token}>
          <Nav token={token} setToken={setToken} />

          <main>
            <Formulario token={token} />
            <Home />
            <Info />

            <Inventario token={token} />
          </main>

          <Footer />
        </ContextoProvider>
      </>
    )
  }
}

export default App
