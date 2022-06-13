import React from 'react'
import ItemCount from './ItemCount'

// Card del producto
function item({id, name, image, stock}) {
  return (
    <div className="itemProduct" key={id}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <ItemCount stock={stock}/>
    </div>
  )
}

export default item