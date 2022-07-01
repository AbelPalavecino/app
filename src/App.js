import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter} from "react-router-dom"
import { MyProvider } from "./Utils/Context" // Ubico estrategicamente el Context en App para pasarlo a los otros componentes

// import NavBar from "./Components/NavBar"
// import ItemListContainer from "./Components/ItemListContainer"
// import ItemDetailContainer from "./Components/ItemDetailContainer"



// Separo el componente de mi archivo index.js a otro y asi deberia hacerlo con cada componente que creo
const App = () =>{

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