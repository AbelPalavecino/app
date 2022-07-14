import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import productos from '../Utils/productos'
import { ProductLoader } from './ProductLoader'
import { db } from '../Config/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [items, setItems] = useState ([])
    const [cargando, setCargando] = useState(true)
    const {category} = useParams()


    useEffect(() => {
        if (category){
        const collectionProducts = collection(db, "products")
        const filtroDelConsul = query(collectionProducts, where("category", "==", "visual") )
        const consultaDataBase = getDocs(filtroDelConsul)

        consultaDataBase
            .then((resultado)=>{

                console.log(resultado.docs)
                const products_maps = resultado.docs.map(reference=>{
                    const aux = reference.data()
                    aux.id = reference.id
                    return aux
                })

                setItems(products_maps)
                setCargando(false)

            })
            .catch((error)=>{
                console.log(error)
            })

    } else{
        const collectionProducts = collection(db, "products")
        const consultaDataBase = getDocs(collectionProducts)

        consultaDataBase
            .then((resultado)=>{
                const products_maps = resultado.docs.map(reference=>{
                    const aux = reference.data()
                    aux.id = reference.id
                    return aux
                })

                setItems(products_maps)
                setCargando(false)

            })
        }
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


