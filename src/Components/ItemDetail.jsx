import React from 'react'
import { useState } from "react"
import ItemCount from './ItemCount'

const ItemDetail = ({name, id, description, stock, precio, image}) => {

  const [cant, setCant] = useState(true)

  const onAdd = (cantidadSeleccionada) => {
    setCant(cantidadSeleccionada)
  }

  // const onAdd = (cantidadSeleccionada)=> {
  //   console.log("Desde item detail : " + cantidadSeleccionada)
  // }

  return (
    <div>
        <img src={image} alt={id} />
        <div>
            <h2>{name}</h2>
            <h2>{precio}</h2>
            <h2>{description}</h2>
            <h2>{stock}</h2>
        </div>
        <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        {/* <button>terminar mi compra</button> */}
    </div>
  )
}

export default ItemDetail