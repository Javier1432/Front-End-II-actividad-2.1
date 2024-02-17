import Swal from 'sweetalert2'

export function info(icon, texto, titulo) {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icon,
        confirmButtonColor: "#2595B8",
    });
}