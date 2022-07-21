import React from 'react'
import { useContext } from 'react';
import { contexto } from "../Utils/CartContext"
import { db } from '../Config/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import Form from './Form';


const Checkout = () => {

  const [data, setData] = useState({ name: '', email: '' });
  const [confirCompra , setConfirCompra ] = useState();
  const {carrito} = useContext(contexto);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
};

  const handleConfirm = (e) => {

    const collectionPedidos = collection(db, 'pedidos');

    e.preventDefault();
    const dataPedido = {
      buyer : {
        name: data.name,
        email: data.email,
      },
      carrito,
      date: serverTimestamp(),
      total: 99
    }

    const consulta = addDoc(collectionPedidos, dataPedido)

    consulta
      .then(result => {
        setConfirCompra(result.id)
      })
      .catch(error => {
        console.log(error)
      })
  }

//   if (confirCompra !== '') {
//     return <h1>Gracias por tu compra, tu número de envío es: {confirCompra}</h1>;
// }

  return (
    <div className="containerItem">
    <h1>Confirmación de compra</h1>
    {confirCompra&&<p className='text-center py-3'>Su compra ha sido confirmada. <br/> Su numero de pedido es: {confirCompra}</p>}
    <Form
      handleChange={handleChange}
      data={data}
      handleSubmit={handleConfirm}
    />
    {/* <button className="btnSubmit" onClick={handleConfirm}>Finalizar compra</button> */}
    </div>
  )
}

export default Checkout