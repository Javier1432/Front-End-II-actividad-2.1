import { useState } from "react"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./components/section/Home"
import Info from "./components/section/Info"
import Inventario from "./components/section/Inventario"
import Login from "./components/Login"
import { ContextoProvider } from "./context/Context"

function App() {

  const [token, setToken] = useState('')

  if (token == '') {
    return (<Login setToken={setToken} />)
  } else {
    return (
      <>
        <ContextoProvider>
          <Nav token={token} setToken={setToken}/>
  
          <main>
            <Home />
            <Info />
  
            <Inventario />
          </main>
  
          <Footer />
        </ContextoProvider>
      </>
    )
  }
}

export default App
