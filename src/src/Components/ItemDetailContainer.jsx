import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Utils/customFetch';
// import { traerProducto } from '../Utils/productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);

  const {id} = useParams()

//   useEffect(() => {
//       traerProducto()
//           .then((respuesta) => {
//               setProducto(respuesta);
//           })
//           .catch((error) => {
//               console.log(error);
//           });
//   }, []);

    useEffect(() => {
        setCargando(true)
        getProductById(parseInt(id))
        .then(response => {
            setProducto(response)
            setCargando(false)
        })
        }, [])

  //console.log(product);
  return <ItemDetail {...producto}/>;
};

export default ItemDetailContainer;