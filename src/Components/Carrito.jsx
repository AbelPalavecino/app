import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from "../Utils/CartContext"

const Carrito = () => {
  
  const {carrito, eliminarProducto, vaciarCarrito, precioTotal} = useContext(contexto);

  return (
    <div className="containerItem">
         {carrito.length === 0 ? (
            <>
             <h1>Tu carrito está vacio</h1>
             <Link to='/' className='btnSubmit'>Volver a la tienda</Link>
            </>
         ) : (
             <>

                     {carrito.map((producto) => (

                            <>

                              <div className="contentItemCart">
                                <div className="col"> 
                                  <img className="imgCart" src={producto.image} alt={producto.name} />
                                </div>
                                <div className="col"> 
                                  <h3>{producto.name}</h3>
                                </div>
                                <div className="col"> 
                                  <span>US${producto.price}</span>
                                </div>
                                  <span>Cantidad: {producto.cantidadSeleccionada}</span>
                                <div className="col"> 
                                  <button className="btnClose" onClick={() => eliminarProducto(producto.id)}>
                                      X
                                  </button>
                                </div>
                              </div>

                             </>

                     ))}

                      <div className="handleCart">
                           <div>
                              <button className="btnDeleteAll" onClick={vaciarCarrito}> X VACIAR CARRITO X</button>
                           </div>

                           <div>
                              <h4>TOTAL: $ {precioTotal}</h4>
                              <Link className="btnConfirCompra" to="/checkout">CHECKOUT</Link>
                           </div>
                      </div>

             </>
         )}
     </div>
  ) 
}

export default Carrito