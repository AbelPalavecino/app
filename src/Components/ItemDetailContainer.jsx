import React, { useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Utils/customFetch';
import ItemDetail from './ItemDetail';
import { ProductLoader } from './ProductLoader';
import { db } from '../Config/firebase'
import { collection , getDoc , doc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams()

    useEffect(() => {

        setCargando(true)

        const collectionProducts = collection(db, "products")
        const referenceDoc = doc(collectionProducts, id)
        const consul = getDoc(referenceDoc)

        consul
          .then(res =>{
            const product = res.data()
            setProducto(product)
            setCargando(false)
          })
          .catch((error)=>{
            console.log(error)
          })

        }, [])

  //console.log(product);
  return ( 
    <Fragment>
      {cargando ? <ProductLoader/> : <ItemDetail producto={producto}/>};
    </Fragment>
  )
};

export default ItemDetailContainer;