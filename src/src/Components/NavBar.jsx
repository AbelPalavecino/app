import { Link } from "react-router-dom"
import LogoMansa from "../Img/Logomansa.png"

// const Nav = 

const NavBar = (props) => {
    if(props.inHeader){
        return(
            <>
                <nav>
                    <li className="Logo"><Link to='/'><img src={LogoMansa} alt="Mansa Visual" /></Link></li>
                    <div className="NavBarMenu">
                        <ul className="LinksMenu">
                            <li><Link to='/'>Inicio</Link></li>
                            <li><Link to='/category/visual'>Visual NFT</Link></li>
                            <li><Link to='/category/Art'>NFT Art</Link></li>
                        </ul>
                        <a href="" className="ItemButton"><button type="button" className="btn-principal">Sign in</button></a>
                    </div>
                </nav>
            </>
        )
    }else{
        return(
            <>
                <nav className="navInFooter">
                    <div className="NavBarMenu">
                        <ul className="LinksMenu">
                            <li><Link to='/'>Inicio</Link></li>
                            <li><Link to='/category/visual'>Visual NFT</Link></li>
                            <li><Link to='/category/Art'>NFT Art</Link></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar