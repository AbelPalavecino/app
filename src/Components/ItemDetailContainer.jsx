import React, { useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Utils/customFetch';
import ItemDetail from './ItemDetail';
import { ProductLoader } from './ProductLoader';
import { db } from '../Config/firebase'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const {id} = useParams()

    useEffect(() => {

        setCargando(true)

        getProductById(parseInt(id)) // getProductById lo construi en el archivo customFetch
        
        .then(response => {
            setProducto(response)
            setCargando(false)
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