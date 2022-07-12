import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import productos from '../Utils/productos'
import { ProductLoader } from './ProductLoader'
import { db } from '../Config/firebase'
import { getDocs } from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [items, setItems] = useState ([])
    const [cargando, setCargando] = useState(true)
    const {category} = useParams()

    useEffect(() => {

        setCargando(true)

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(category ? productos.filter((producto) =>{
                    
                    return producto.category == category

                })
                : productos)
            }, 2000)
        })
        .then(resultado => {
            setItems(resultado)
            setCargando(false)
        })

    }, [category])

    return(
        <>
            <h2>
                {props.greeting}
            </h2>
            <div className="itemsContainer">    
                {cargando ? <ProductLoader/> : <ItemList productos={items}/> }
            </div>
        </>
    )
}

export default ItemListContainer


