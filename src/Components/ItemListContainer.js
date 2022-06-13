import { useEffect, useState } from 'react'
import customFetch from '../Utils/customFetch'
import productos from '../Utils/productos'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

    const [items, setItems] = useState ([])

    useEffect (() => {
        customFetch(3000, productos)
        .then(resultado => setItems(resultado)) 
    }, [items])

    // useEffect(()=> {

    //     setTimeout(() => {
    //     console.log("pidiendo productos...")
    //     const productosDeDB = ["Product 1", "Producto 2", "Producto 3"]
    //     setItems(productosDeDB)
    // }, 2000)

    // }, [])

    // const onAdd = ( ) => {}

    return(
        <>
            <h2>
                {props.greeting}
            </h2>
            <div className="itemsContainer">    
                <ItemList productos= {items}/>
            </div>
        </>
    )
}

export default ItemListContainer


