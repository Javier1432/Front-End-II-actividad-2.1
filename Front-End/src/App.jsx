import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./components/section/Home"
import Info from "./components/section/Info"
import Inventario from "./components/section/Inventario"

function App() {

  return (
    <>
      <Nav />
      
      <main>
        <Home />
        <Info />

        <Inventario />
      </main>

      <Footer />
    </>
  )
}

export default App
