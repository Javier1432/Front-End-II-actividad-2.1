import { createContext, useEffect, useState } from "react";

export const Contexto = createContext()

export function ContextoProvider(props) {

    const [categorias, setCategorias] = useState(['Computacion', 'Electronica', 'Mobile']);
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

    function guardarProducto(producto) {
        setProductos([...productos, producto])
    }

    return (
        <Contexto.Provider value={{
            productos,
            categorias,
            showModal,
            setShowModal,
            guardarProducto
            }}>
            {props.children}
        </Contexto.Provider>
    )
}