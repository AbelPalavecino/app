import React, { useContext } from 'react'
import { useState } from "react"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { contexto } from "../Utils/CartContext"

const ItemDetail = ({name, id, description, stock, precio, image}) => {

  const [cant, setCant] = useState(1)
  // const [estado, setEstado] = useState(false);

  const { agregarAlCarrito } = useContext(contexto)

  const onAdd = (cantidadSeleccionada) => {
    setCant(cantidadSeleccionada)
    agregarAlCarrito(name, id, description, stock, precio, image, cantidadSeleccionada)
  }

  // const handleAddCarrito = () => {
  //   agregarAlCarrito()
  // }

  // console.log(handleAddCarrito)

  return (
    <div>
        <img src={image} alt={id} />
        <div>
            <h2>{name}</h2>
            <h2>{precio}</h2>
            <h2>{description}</h2>
            <h2>{stock}</h2>
        </div>
        {cant === 0 ? (
          <Link to="/Carrito">Ver carrito</Link>
        ) : (
          <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        )}
    </div>
  )
}

export default ItemDetail