import { useState } from "react"
// import { Link } from 'react-router-dom';

const ItemCount = ( {stock, initial, onAdd} ) =>{

    // const resultado = useState()
    // console.log(resultado)

    const [contador, setContador] = useState(initial) // defino el valor inicial del contador

    const incrementar = () =>{
        if(contador < stock){
            setContador(contador +1) // definimos una funcion y la utilizo para actualizar el valor del contador
        }else{
            console.log('Lo sentimos, no hay stock')
        }
    }

    const reducir = () =>{
        if(contador > 1){
            setContador( contador - 1 ) // definimos una funcion y la util
        }
    }


    return(
        <div className="ItemCountContainer">
            <div className="countContainer">
                <button className="counterBtn" onClick={reducir}><span className="material-symbols-outlined">remove</span></button>
                <span className="counterText">{contador}</span>
                <button className="counterBtn" onClick={incrementar}><span className="material-symbols-outlined">add</span></button>
            </div> 
            <button className="btnSubmit" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount