import React from 'react'
import { Link } from 'react-router-dom'


function Item( { id, name, image, price } ) {
  return (
    <div className="itemProduct" key={id}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>US${price}</p>
        <Link className="btnSubmit" to={`/detail/${id}`}>Ver NFT</Link>
    </div>
  )
}

export default Item