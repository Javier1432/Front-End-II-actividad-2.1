import { useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

function Paginacion({ pagina, maximo, setPagina}) {

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPagina(parseInt(pagina) + 1);
    };

    const previousPage = () => {
        setInput(parseInt(input) - 1);
        setPagina(parseInt(pagina) - 1);
    };

    const onKeyDown = e => {
        if (e.keyCode == 13) {
            setPagina(parseInt(e.target.value));
            if (
                parseInt(e.target.value < 1) ||
                parseInt(e.target.value) > Math.ceil(maximo) ||
                isNaN(parseInt(e.target.value))
            ) {
                setPagina(1);
                setInput(1);
            } else {
                setPagina(parseInt(e.target.value));
            }
        }
    };

    const onChange = e => {
        setInput(e.target.value);
    };

    return (
        <>
            <div className="flex gap-2 w-full justify-center">
                <button className="bg-primario text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-secundario transition-all duration-300"
                    disabled={pagina === 1 || pagina < 1}
                    onClick={previousPage}
                ><IoCaretBackOutline /></button>

                <input
                    className="bg-primario w-8 text-center text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-secundario transition-all duration-300"
                    onChange={e => onChange(e)}
                    onKeyDown={e => onKeyDown(e)}
                    name="page"
                    autoComplete="off"
                    value={input}
                />
                <p className="bg-primario text-blanco text-xl font-Roboto rounded-md p-2 transition-all duration-300"> de {maximo} </p>
                

                <button className="bg-primario text-blanco text-xl font-Roboto rounded-md p-2 hover:bg-secundario transition-all duration-300"
                    disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
                    onClick={nextPage}
                ><IoCaretForwardOutline /></button>
            </div>
        </>
    )
}

export default Paginacion