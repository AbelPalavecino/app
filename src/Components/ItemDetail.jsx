import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({name, id, description, stock, precio, image}) => {
  return (
    <div>
        <img src={image} alt={id} />
        <div>
            <h2>{name}</h2>
            <h2>{precio}</h2>
            <h2>{description}</h2>
            <h2>{stock}</h2>
        </div>
        <ItemCount stock={stock} onAdd={()=>{console.log('Producto Agregado')}} initial={1}/>
    </div>
  )
}

export default ItemDetail