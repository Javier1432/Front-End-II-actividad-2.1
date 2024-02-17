export function validacion(campo) {
    if (campo.trim().length == 0) return "Error"

    return
}

export function editar(inventario, producto) {
    console.log(inventario)
    console.log(producto)

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].id === producto.id) {
            inventario[i] = producto
            return inventario
        }
    }

    return 'error'
}