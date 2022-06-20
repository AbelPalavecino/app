
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import { Route, Routes } from "react-router-dom"

const Main = () =>{

    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/category/:category" element={<ItemListContainer/>}></Route>
                <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </main>
    )
}

export default Main