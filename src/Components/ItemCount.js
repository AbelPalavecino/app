import { useState } from "react"

const ItemCount = ( stock, initial, onAdd) =>{
    
    // const resultado = useState()
    // console.log(resultado)

    const [contador, setContador] = useState(0) // defino el valor inicial del contador

    const incrementar = () =>{
        setContador(contador +1) // definimos una funcion y la utilizo para actualizar el valor del contador
    }

    const reducir = () =>{
        if(contador > 0){
            setContador( contador - 1 ) // definimos una funcion y la util
        }
    }

    const agregar = () => {}
    

    return(
        <div className="ItemCountContainer">
            <div className="countContainer">
                <button className="counterBtn" onClick={reducir}><span class="material-symbols-outlined">remove</span></button>
                <span className="counterText">{contador}</span>
                <button className="counterBtn" onClick={incrementar}><span class="material-symbols-outlined">add</span></button>
            </div>
            <button className="btnSubmit" onClick={agregar}>Agregar</button>
        </div>
    )
}

export default ItemCount