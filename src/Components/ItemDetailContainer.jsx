import React, { useState, useEffect } from 'react';
import { traerProducto } from '../Utils/productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
      traerProducto()
          .then((respuesta) => {
              setProducto(respuesta);
          })
          .catch((error) => {
              console.log(error);
          });
  }, []);

  //console.log(product);
  return <ItemDetail producto={producto}/>;
};

export default ItemDetailContainer;