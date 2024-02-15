function Buttom({texto, funcion, className}) {

    return (
      <>
        <button
        className={`w-full rounded-full hover:bg-blanco hover:text-negro hover:border-negro hover:border-2 transition-all duration-300 ${className}`}
        onClick={(e) => {
            funcion(e)
        }}>
            {texto}
        </button>
      </>
    )
  }
  
  export default Buttom