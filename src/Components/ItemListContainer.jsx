import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { ProductLoader } from './ProductLoader'
import { db, collectionProducts } from '../Config/firebase'
import { getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [items, setItems] = useState ([])
    const [cargando, setCargando] = useState(true)
    const {category} = useParams()

    useEffect(() =>{
        const referencia = category
            ? query(collectionProducts, where('category', '==', category))
            : collectionProducts

        getDocs(referencia).then((res) => {
            const products = res.docs.map((doc) => {
                return{
                    id: doc.id,
                    ...doc.data(),
                }
            });
            setItems(products);
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


