import React from 'react'

// Card del producto
function item( { id, name, image } ) {
  return (
    <div className="itemProduct" key={id}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
    </div>
  )
}

export default item