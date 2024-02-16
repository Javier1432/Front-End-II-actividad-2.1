import { createContext, useEffect, useState } from "react";

export const Contexto = createContext()

export function ContextoProvider(props) {

    const [categorias, setCategorias] = useState(['Computacion', 'Electronica', 'Mobile']);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarStore()
    }, [])

    function cargarStore() {
        fetch("http://localhost:3000/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setProductos(data.data);
                }
            })
            .catch((error) => {
                console.error(error)
            });
    }

    return (
        <Contexto.Provider value={{
            productos,
            categorias
            }}>
            {props.children}
        </Contexto.Provider>
    )
}