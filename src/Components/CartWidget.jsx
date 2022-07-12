import { NavLink } from "react-router-dom"
import { useContext } from "react" // Importo este hooks para leer los valores de MyContext
import { contexto } from "../Utils/CartContext" // importo el Context.js donde se encuentra mi contexto

const CartWidget = () =>{

    // const {resTotalUnidades} = useContext(contexto)
    // console.log(resTotalUnidades)

    const {cantidadTotal} = useContext(contexto);

    return(
        <NavLink to="/Carrito">
            <p><span className="material-symbols-outlined">shopping_cart</span>{cantidadTotal}</p>
        </NavLink>
    )
}

export default CartWidget
