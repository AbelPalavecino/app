import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

// Separo el componente de mi archivo index.js a otro y asi deberia hacerlo con cada componente que creo


const App = () =>{
    return(
    <>
     <Header/>
     <Main/>
     <Footer/>
    </>
    )
} // Componente

// tengo que exportar este componente para que trabaje en el render de index.js

// export default variable (asi lo puedo hacer solo una vez)
// export variable
export default App