import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

    const [items, setItems] = useState ([])

    useEffect(()=> {

        setTimeout(() => {
        console.log("pidiendo productos...")
        const productosDeDB = ["Product 1", "Producto 2", "Producto 3"]
        setItems(productosDeDB)
    }, 2000)

    }, [])

    const onAdd = () => {}

    return(
        <>
        <h2>
            {props.greeting}
        </h2>
        <ItemCount stock={6} onAdd={onAdd} initial={1}/>
        </>
    )
}

export default ItemListContainer


