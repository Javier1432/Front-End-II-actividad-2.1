import gestiona from '../../assets/manage-dashboard-analytic_svgrepo.com.png'
import favorito from '../../assets/favorite_svgrepo.com.png'
import user from '../../assets/user-shield-alt_svgrepo.com.png'

function Info() {

    const tarjetas = [
        {image: favorito, titulo: 'Favorito', texto: '¡Guarda tus favoritos con un clic! Organiza y accede fácilmente a tus productos preferidos en SkyBlue virtual con el servicio de agregar a favoritos.'},
        {image: gestiona, titulo: 'Gestiona', texto: 'Optimiza tu inventario online con nuestro servicio de gestión de productos: ¡Control total con un clic!'},
        {image: user, titulo: 'Usuarios', texto: 'Registro de usuarios: Acceso seguro y personalizado a tu inventario digital'}
    ]

    return (
        <>
            <section className="bg-fondo h-[100vh] md:h-[50vh] flex flex-col justify-center md:flex-row gap-16 px-16 py-4">
                {tarjetas.map((tarjeta, id) => (
                    <div key={id} className='w-full md:w-1/3 flex flex-col gap-4 items-center justify-center'>
                        <img src={tarjeta.image} className='w-[60px] h-[60px]' alt="" />
                        <h3 className='text-2xl text-negro font-Montserrat font-bold'>{tarjeta.titulo}</h3>
                        <p className='text-center text-sm text-negro font-Merriweather font-normal'>{tarjeta.texto}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Info