import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
// import {useState} from "react"
import { BrowserRouter} from "react-router-dom"
// import NavBar from "./Components/NavBar"
// import ItemListContainer from "./Components/ItemListContainer"
// import ItemDetailContainer from "./Components/ItemDetailContainer"

// Separo el componente de mi archivo index.js a otro y asi deberia hacerlo con cada componente que creo


const App = () =>{

    // const resultado = useState(0) // el valor de inicializacion del estado
    // const contador = resultado[0]
    // const cambiarContador = resultado[1]

    // const [contador, setContador] = useState(0)
    //        // estado / Funcion
    // console.log(contador)

    // const aumentarContador = () =>{
    //     console.log("aumentarContador")
    //     setContador(contador + 1)
    // }

    // const bajarContador = () =>{
    //     if (contador > 0){
    //         setContador(contador - 1)
    //     }
    // }

    return(
    <>
     <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
     </BrowserRouter>
    </>
    )
} // Componente

// tengo que exportar este componente para que trabaje en el render de index.js

// export default variable (asi lo puedo hacer solo una vez)
// export variable
export default App