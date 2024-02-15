function Buttom({texto, funcion, className}) {

    return (
      <>
        <button
        className={` ${className}`}
        onClick={(e) => {
            funcion(e)
        }}>
            {texto}
        </button>
      </>
    )
  }
  
  export default Buttom