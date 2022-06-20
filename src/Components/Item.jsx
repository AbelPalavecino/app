import React from 'react'
import { Link } from 'react-router-dom'

// Card del producto
function Item( { id, name, image } ) {
  return (
    <div className="itemProduct" key={id}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <Link className="btnSubmit" to={`/detail/${id}`}>Ver NFT</Link>
    </div>
  )
}

export default Item