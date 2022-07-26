import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../Utils/CartContext"

const CartWidget = () =>{

    const {cantidadTotal} = useContext(contexto);

    return(
        <NavLink to="/Carrito">
            <p className="cantCartWidget"><span className="material-symbols-outlined">shopping_cart</span>{cantidadTotal}</p>
        </NavLink>
    )
}

export default CartWidget
