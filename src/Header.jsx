import NavBar from "./Components/NavBar"
import CartWidget from "./Components/CartWidget"

const Header = () => {

    return(
     <header>
        <NavBar inHeader={true}/>
        <CartWidget/>
     </header>
    )
}

export default Header