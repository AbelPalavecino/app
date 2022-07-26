import React, { useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
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
            setProducto({
              id : res.id,
              ...res.data()
            })
            setCargando(false)
          })
          .catch((error)=>{
            console.log(error)
          })

        }, [])

  return ( 
    <Fragment>
      {cargando ? <ProductLoader/> : <ItemDetail producto={producto}/>};
    </Fragment>
  )
};

export default ItemDetailContainer;