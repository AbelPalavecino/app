import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import customFetch, { getProductByCategory } from '../Utils/customFetch'
import ItemList from './ItemList'
import productos from '../Utils/productos'
import { ProductLoader } from './ProductLoader'

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

    // const {categoryId} = useParams()

    // useEffect (() => {
    //     if(!categoryId){
    //         customFetch().then(response =>{
    //             setItems(response)
    //         })
    //     }else{
    //         getProductByCategory(categoryId).then(response => {
    //             setItems(response)
    //         })
    //     }
    // }, [categoryId])

    return(
        <>
            <h2>
                {props.greeting}
            </h2>
            <div className="itemsContainer">    
                {cargando ? <ProductLoader/> : <ItemList productos={items}/>}
            </div>
        </>
    )
}

export default ItemListContainer


