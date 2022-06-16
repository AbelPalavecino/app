import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <img src={producto.image} alt={producto.name} />
        <div>
            <h2>{producto.name}</h2>
            <h2>{producto.precio}</h2>
            <h2>{producto.description}</h2>
            <h2>{producto.stock}</h2>
        </div>
        <ItemCount stock={producto.stock} onAdd={()=>{console.log('Producto Agregado')}} initial={1}/>
    </div>
  )
}

export default ItemDetail