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
  const {carrito, finalizarPedido, precioTotal} = useContext(contexto);

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
      total: precioTotal
    }

    const consulta = addDoc(collectionPedidos, dataPedido)

    consulta
      .then(result => {
        setConfirCompra(result.id)
      })
      .catch(error => {
        console.log(error)
      });

      finalizarPedido()
  }

  return (
    <div className="containerForm">
    <h3>DATOS DE FACTURACIÓN</h3>
    {confirCompra&&<p className='text-center py-3'>Su compra ha sido confirmada. <br/> Su numero de pedido es: {confirCompra}</p>}
    <Form
      handleChange={handleChange}
      data={data}
      handleSubmit={handleConfirm}
    />
    </div>
  )
}

export default Checkout