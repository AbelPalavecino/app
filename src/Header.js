import NavBar from "./Components/NavBar"
import CartWidget from "./Components/CartWidget"

const Header = () => {

    return(
     <header>
        <NavBar inHeader={true} 
        cosasParaMostrar={["Link1", "Link2", "Link3"]}/>
        <CartWidget/>
     </header>
    )
}

export default Header