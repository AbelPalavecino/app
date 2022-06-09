import LogoMansa from "../Img/Logomansa.png"

// const Nav = 

const NavBar = (props) => {
    if(props.inHeader){
        return(
            <>
                <nav>
                    <a href="#" className="Logo"><img src={LogoMansa} alt="Mansa Visual" /></a>
                    <div className="NavBarMenu">
                        <ul className="LinksMenu">
                            <a href="#">NFT Art</a>
                            <a href="#">Shop</a>
                            <a href="#">Search</a>
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
                            <a href="#">NFT Art</a>
                            <a href="#">Shop</a>
                            <a href="#">Search</a>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar