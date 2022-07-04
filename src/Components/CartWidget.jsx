import { NavLink } from "react-router-dom"
import { useContext } from "react" // Importo este hooks para leer los valores de MyContext
import { contexto } from "../Utils/CartContext" // importo el Context.js donde se encuentra mi contexto

const CartWidget = () =>{

    const {resTotalUnidades} = useContext(contexto) // Ejecuto la funcion con un parametro del contexto completo (ho hay otra opcion) y guardo su valor
    // console.log(resultadoProvider)

    // setTimeout(() => {
    //     resultadoProvider.setCarrito(["producto 1", "producto 2", "producto 3", "producto 4"])
    // },5000)

    return(
        <NavLink to="/Carrito">
            <p><span className="material-symbols-outlined">shopping_cart</span>{resTotalUnidades()}</p>
        </NavLink>
    )
}

export default CartWidget
