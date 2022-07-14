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
            <h3>{producto.description}</h3>
            <p>${producto.price} <span>[ Stock:{producto.stock} ]</span></p>
        </div>
        {cant ? (
          <button className="btnSubmit"><Link to="/Carrito">Ver carrito</Link></button>
        ) : (
          <ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/>
        )}
    </div>
  )
}

export default ItemDetail