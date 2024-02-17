import { useContext, useState } from "react";
import { Contexto } from "../../context/Context";

export default function Formulario({ token }) {

    const [state, setState] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        cantidad: "",
        categoria: "",
        image: "",
    });

    const { categorias, showModal, setShowModal, guardarProducto, producto } = useContext(Contexto)

    const error = undefined;

    const validacion = () => {
        let claves = Object.keys(state);
        for (let i = 0; i < claves.length; i++) {
            let clave = claves[i];
            if (state[clave].trim() === '') {
                return true
            };
        }
    };

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeImage = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validacion();

        if (error) {
            alert('Algún Campo es Inválido')
            return
        }

        const formData = new FormData(e.currentTarget)

        fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    console.log(data)
                    guardarProducto({
                        id: data.data.newProductId,
                        nombre: state.nombre,
                        descripcion: state.descripcion,
                        precio: state.precio,
                        cantidad: state.cantidad,
                        categoria: state.categoria,
                        imagen: data.data.imagen,
                    })
                    info('success', 'Se ha agregado exitosamente el producto', 'Producto Agregado')
                }

            })

        setState({
            nombre: "",
            descripcion: "",
            precio: "",
            cantidad: "",
            categoria: "",
            image: "",
        })

    };



    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full flex justify-center items-center">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center w-4/5 bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between px-5 py-10 w-[95%]  border-b-2 border-solid border-opaco rounded-t">
                                    <h3 className="text-4xl text-center font-Nunito font-bold text-primario w-full">
                                        Agregar Producto
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-negro font-Roboto float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        x
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative w-full px-4 py-8 md:px-12 md:py-8 flex-auto">
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                                        <div className="flex flex-col gap-1">
                                            <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-primario">Nombre: </label>
                                            <input className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full" type="text" placeholder="escribe el nombre del producto..."
                                                name="nombre"
                                                onChange={handleChange}
                                                value={state.nombre}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-primario">Imágen: </label>
                                            <input className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full" type="file" placeholder="escribe la dirección url de la imagen..."
                                                name="image"
                                                value={state.image}
                                                onChange={handleChangeImage}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-primario">Categoria: </label>
                                            <select className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full" type="text" placeholder="escribe la categoria del producto..."
                                                name="categoria"
                                                value={state.categoria}
                                                onChange={handleChange}
                                            >
                                                <option value=''></option>
                                                {
                                                    categorias.map((categoria, indice) => (
                                                        <option key={indice} value={categoria}>{categoria}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-16">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-primario">Precio: </label>
                                                <input className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full" type="number" min={0} placeholder="escribe el precio del producto..."
                                                    name="precio"
                                                    value={state.precio}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-primario">Cantidad: </label>
                                                <input className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full"
                                                    name="cantidad"
                                                    type="number"
                                                    value={state.cantidad}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label className="text-xl md:text-2xl font-bold font-Nunito pl-4 text-primario">Descripcion: </label>
                                            <textarea className="rounded-3xl border-2 border-tono-bajo py-1 px-3 md:py-2 text-lg md:text-xl text-opaco w-full resize-none" placeholder="describa el producto que esta agregando..."
                                                name="descripcion"
                                                value={state.descripcion}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="flex flex-row-reverse">
                                            <button
                                                className="font-Roboto font-semibold text-lg md:text-xl text-blanco bg-primario rounded-xl py-2 px-8 mt-8"
                                                disabled={error}
                                                type="submit"
                                            >Agregar Producto</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}