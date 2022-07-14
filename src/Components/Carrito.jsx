import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from "../Utils/CartContext"

const Carrito = () => {
  
  const {carrito, eliminarProducto, vaciarCarrito, precioTotal} = useContext(contexto);

  return (
    <div className="containerItem">
         {carrito.length === 0 ? (
             <h1>Tu carrito está vacio</h1>
         ) : (
             <>

                     {carrito.map((producto) => (

                            <>
                             <h2>{producto.name}</h2>
                             <img src={producto.image} alt={producto.name} />
                             <h2>${producto.price}</h2>
                             <h2>Cantidad: {producto.cantidadSeleccionada}</h2>
                             <button className="btnSubmit" onClick={() => eliminarProducto(producto.id)}>
                                 Eliminar
                             </button>

                             </>

                     ))}
                           <> 

                              <button className="btnSubmit" onClick={vaciarCarrito}>Vaciar carrito</button>
                           </>

                           <>
                           <h4>Precio Total: $ {precioTotal}</h4>
                           </>

             </>
         )}
     </div>
  ) 
}

export default Carrito