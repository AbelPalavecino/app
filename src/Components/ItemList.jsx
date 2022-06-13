import React from 'react'
import Item from './Item'

function itemList({productos}) {
  return (
    productos.map(producto =>
        <Item
        id={producto.id}
        name={producto.name}
        image={producto.image}
        key={producto.key}
        stock={producto.stock}
        />
        )
  )
}

export default itemList