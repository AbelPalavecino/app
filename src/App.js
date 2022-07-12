import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter} from "react-router-dom"
import { MyProvider } from "./Utils/CartContext" // Ubico estrategicamente el Context en App para pasarlo a los otros componentes



// Separo el componente de mi archivo index.js a otro y asi deberia hacerlo con cada componente que creo
const App = () =>{

    return(
    <>
     <BrowserRouter>
        <MyProvider>
            <Header/>
            <Main/>
        </MyProvider>
        <Footer/>
     </BrowserRouter>
    </>
    ) // Por default, <Header/> y <Main/> pasan a ser children de MyProvider. Asi puedo viajar a sus hijos y pasarle cosas
} // Componente

// tengo que exportar este componente para que trabaje en el render de index.js

// export default variable (asi lo puedo hacer solo una vez)
// export variable
export default App