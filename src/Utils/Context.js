import { createContext } from "react"

const contexto = createContext()

// Con Provider (es un componente) seteo el valor inicial del contexto.
const Provider = contexto.Provider // lo guardo en una variable para luego usarlo mas facil
// El Provider es un componente que viene adentro del Context y sirve para: 1) determina quienes tienen acceso a la informacion por ubicacion y 2) determina el valor del Context

// Para utilizar el Provider como buena practica, creo un componente aca para luego manipularlo
export const MyProvider = () => {

    const valueContext = {
        carrito : [],
        cant_total : 0,
        total_price : 0,
    }

    return(
        <Provider value={valueContext}>

        </Provider>
    ) // El valor inicial del Provider se pasa como props, y le puedo poner cualquier cosa que quiera almacenar
}