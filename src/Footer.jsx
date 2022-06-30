import NavBar from "./Components/NavBar"

const Footer = () =>{
    return(
        <footer>
            <NavBar inHeader={false}
            cosasParaMostrar={["Instagram", "Facebook", "Twitter"]}/>
            <p>Copyright &copy; Mansa Visual 2022</p> 
        </footer>
    )
}

export default Footer