
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"

const Main = () =>{

    return(
        <main>
            <ItemListContainer greeting="Hola Humano!"/>
            <ItemDetailContainer/>
        </main>
    )
}

export default Main