import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from "../Utils/CartContext"

const Carrito = () => {
  
  const {cartContent} = useContext(contexto);
  console.log(cartContent)

  return (
    <>
    <h1>Carrito</h1>
    <Link to="/Checkout"> Proceder con la compra</Link>
    </>
  ) 
}

export default Carrito