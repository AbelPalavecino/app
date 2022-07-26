import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter} from "react-router-dom"
import {MyProvider}  from "./Utils/CartContext"

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
    )
} 

export default App