import { createContext, useState } from "react"

export const contexto = createContext() 
// tengo que exportar el contexto para usarlo en sus hijos

// Con Provider (es un componente) seteo el valor inicial del contexto.
const Provider = contexto.Provider // lo guardo en una variable para luego usarlo mas facil
// El Provider es un componente que viene adentro del Context y sirve para: 1) determina quienes tienen acceso a la informacion por ubicacion y 2) determina el valor del Context

// Para utilizar el Provider como buena practica, creo un componente aca para luego manipularlo
export const MyProvider = ({ children }) => { // children representa a los hijos de MyProvider: <Header/> y <Footer/>

    // Con useState actualizo los valores de mi objeto y asi react los "siga/controle"
    const [carrito, setCarrito ] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        if (hayProductos(item.id)){
            sumarCantidad(item, cantidad);
        } else{
        setCarrito([...carrito, {...item, cantidad}])
        }
    }

    const hayProductos = id => carrito.some((prod) => prod.id === id);

    const sumarCantidad = (item, cantidad) => {
        const nuevosProductos = carrito.map((prod) => {
            if (prod.id === item.id) {
                const nuevosProductos = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return nuevosProductos
            } else {
                return prod;
            }
        });
        setCarrito(nuevosProductos)
    }

    const [cant_total, setCantTotal] = useState(0);

    const resTotalUnidades = () => {
        return 5;
    };

    const [total_price, setTotalPrice] = useState(0);


    // le paso los useState al objeto
    const valueContext = {
        carrito : carrito,
        cant_total : cant_total,
        total_price : total_price,
        setCarrito : setCarrito,
        resTotalUnidades: resTotalUnidades,
        agregarAlCarrito : agregarAlCarrito,
    } 

    return(
        <Provider value={valueContext}>
            {children}
        </Provider>
    ) // El valor inicial del Provider se pasa como props, y le puedo poner cualquier cosa que quiera almacenar
}

// <Header/> y <Footer/> ahora pueden consumir las cosas que estan dentro del Context