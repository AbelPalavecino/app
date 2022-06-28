import React from 'react'
import { useState } from "react"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({name, id, description, stock, precio, image}) => {

  const [cant, setCant] = useState(true)
  const [estado, setEstado] = useState(false);

  const onAdd = (cantidadSeleccionada) => {
    setCant(cantidadSeleccionada)
    setEstado(true)
  }

  return (
    <div>
        <img src={image} alt={id} />
        <div>
            <h2>{name}</h2>
            <h2>{precio}</h2>
            <h2>{description}</h2>
            <h2>{stock}</h2>
        </div>
        {estado ? (
          <>
            <h3>Compra finalizada</h3>
            <Link to="/Carrito">
              <button>Agregar al carrito</button>
            </Link>
          </>
        ) : (<ItemCount stock={stock} onAdd={onAdd} initial={1}/>)}
    </div>
  )
}

export default ItemDetail