import { createContext, useEffect, useState } from "react";

export const Contexto = createContext()

export function ContextoProvider(props) {

    const [categorias, setCategorias] = useState(['Computacion', 'Electronica', 'Mobile']);
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [rol, setRol] = useState('')

    useEffect(() => {
        cargarStore()
    }, [])

    function cargarStore() {
        fetch("http://localhost:3000/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'BEARER ' + props.token
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    console.log(data)
                    setProductos(data.data.productos);
                }
            })
            .catch((error) => {
                console.error(error)
            });
    }

    function deleteStore(id) {
        fetch("http://localhost:3000/products/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'BEARER ' + props.token
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    const nuevoInventario = productos.filter(producto => producto.id !== id)
                    setProductos(nuevoInventario)
                    info('success', 'Se ha eliminado exitosamente el producto', 'Producto Eliminado')
                }
            })
            .catch((error) => {
                console.error(error)
            });
    }

    function guardarProducto(producto) {
        setProductos([...productos, producto])
    }

    return (
        <Contexto.Provider value={{
            productos,
            categorias,
            showModal,
            setShowModal,
            guardarProducto,
            deleteStore,
            setProductos,
            setShowModal2,
            showModal2,
            rol,
            setRol
        }}>
            {props.children}
        </Contexto.Provider>
    )
}