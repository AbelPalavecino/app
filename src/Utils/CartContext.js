import { createContext, useState } from "react"

export const contexto = createContext()

const Provider = contexto.Provider 

export const MyProvider = ({ children }) => {


    const [carrito, setCarrito ] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const hayProductos = id => carrito.some((prod) => prod.id === id);

    const addProduct = (producto, cantidadSeleccionada) => {
        
        setCantidadTotal(cantidadTotal + cantidadSeleccionada);

        setPrecioTotal(precioTotal + producto.price * cantidadSeleccionada);

        if (hayProductos(producto.id)){
            sumarCantidad(producto, cantidadSeleccionada);
        } else{
        setCarrito([...carrito, {...producto, cantidadSeleccionada}])
        }
    }

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
        const cartFiltrado = (carrito.filter((producto) => producto.id === id ))
        setCarrito(cartFiltrado)
    };


    const finalizarPedido = () => {
        setCarrito([]);

        setCantidadTotal(cantidadTotal - cantidadTotal);

        setPrecioTotal(0);
    }


    const vaciarCarrito = () => {
        setCarrito([]);

        setCantidadTotal(cantidadTotal - cantidadTotal);

        setPrecioTotal(0);
    }


    const valueContext = {
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito,
        addProduct: addProduct,
        carrito,
        precioTotal,
        cantidadTotal,
        finalizarPedido
    }

    return(
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}
