import LogoMansa from "../Img/Logomansa.png"

const NavBar = () => {
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
}

export default NavBar