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
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const addProduct = (producto, cantidadSeleccionada) => {
        if (hayProductos(producto.id)){
            sumarCantidad(producto, cantidadSeleccionada);
            setPrecioTotal(precioTotal + producto.precio * cantidadSeleccionada);
            setCantidadTotal(cantidadTotal + cantidadSeleccionada);
        } else{
        setCarrito([...carrito, {...producto, cantidadSeleccionada}])
        }
    }

    const hayProductos = id => carrito.some((prod) => prod.id === id);

    const sumarCantidad = (producto, cantidadSeleccionada) => {
        const nuevosProductos = carrito.map((prod) => {
            if (prod.id === producto.id) {
                const nuevosProductos = {
                    ...prod,
                    cantidadSeleccionada: prod.cantidadSeleccionada + cantidadSeleccionada,
                };
                return nuevosProductos
            } else {
                return prod;
            }
        });
        setCarrito(nuevosProductos)
    }

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((prod) => prod.id !== id ))
    };

    const vaciarCarrito = (_) => {
        setCarrito([]);
    }


    // const resTotalUnidades = () => {
    //     return 5;
    // };


    // le paso los useState al objeto
    const valueContext = {
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito,
        addProduct: addProduct,
        carrito: carrito,
        // resTotalUnidades: resTotalUnidades,
        precioTotal: precioTotal,
        cantidadTotal: cantidadTotal,
    }

    return(
        <Provider value={valueContext}>
            {children}
        </Provider>
    ) // El valor inicial del Provider se pasa como props, y le puedo poner cualquier cosa que quiera almacenar
}

// <Header/> y <Footer/> ahora pueden consumir las cosas que estan dentro del Context