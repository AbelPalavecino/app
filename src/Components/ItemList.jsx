import React from 'react'
import Item from './Item'

function ItemList({productos}) {
  return (
    productos.map(producto =>
        <Item
        id={producto.id}
        name={producto.name}
        image={producto.image}
        key={producto.id}
        stock={producto.stock}
        />
        )
  )
}



export default ItemList