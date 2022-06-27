
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import Carrito from "./Components/Carrito"
import Checkout from "./Components/Checkout"
import { Route, Routes } from "react-router-dom"

const Main = () =>{

    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/category/:category" element={<ItemListContainer/>}></Route>
                <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/Carrito" element={ <Carrito/>}/>
                <Route path="/Checkout" element={ <Checkout/>}/>
            </Routes>
        </main>
    )
}

export default Main