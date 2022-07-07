import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from "../Utils/CartContext"

const Carrito = () => {
  
  const {carrito, eliminarProducto, vaciarCarrito} = useContext(contexto);

  return (
    <div className="containerItem">
         {carrito.length === 0 ? (
             <h3>Tu carrito está vacio</h3>
         ) : (
             <>

                     {carrito.map((producto) => (

                            <>
                             <h2>{producto.name}</h2>
                             <img src={producto.image} alt={producto.name} />
                             <h2>${producto.precio}</h2>
                             <h2>Cantidad: {producto.cantidadSeleccionada}</h2>
                             <button onClick={() => eliminarProducto(producto.id)}>
                                 Eliminar
                             </button>

                             </>

                     ))}
                           <> 

                              <button onClick={vaciarCarrito}>Vaciar carrito</button>
                           </>

             </>
         )}
     </div>
  ) 
}

export default Carrito