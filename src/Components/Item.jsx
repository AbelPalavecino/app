import React from 'react'
import { Link } from 'react-router-dom'
// import { db } from '../Config/firebase'

// Card del producto
function Item( { id, name, image, price } ) {
  return (
    <div className="itemProduct" key={id}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>${price}</p>
        <Link className="btnSubmit" to={`/detail/${id}`}>Ver NFT</Link>
    </div>
  )
}

export default Item