import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from "../Utils/CartContext"

const Carrito = () => {
  
  const {carrito} = useContext(contexto);
  console.log(carrito)

  return (
    <>
    <h1>Carrito</h1>
    <Link to="/Checkout"> Proceder con la compra</Link>
    <form>
      <input type="text"/>
      <button> comprar</button>
    </form>
    </>
  ) 
}

export default Carrito