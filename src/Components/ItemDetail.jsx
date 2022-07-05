import React, { Fragment, useContext } from 'react'
import { useState } from "react"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { contexto } from "../Utils/CartContext"

const ItemDetail = ({producto}) => {

  const [cant, setCant] = useState(false)
  const { addProduct } = useContext(contexto)

  const onAdd = (cantidadSeleccionada) => {

    setCant(true)
    addProduct(producto, cantidadSeleccionada)

  }

  return (
    <div className="container-item">
        <img src={producto.image} alt={producto.name} />
        <div>
            <h2>{producto.name}</h2>
            <h2>{producto.precio}</h2>
            <h2>{producto.description}</h2>
            <h2>{producto.stock}</h2>
        </div>
        {cant ? (
          <Link to="/Carrito">Ver carrito</Link>
        ) : (
          <ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/>
        )}
    </div>
  )
}

export default ItemDetail