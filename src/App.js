import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";


function App(){

    return (
        <div className="App">
            <NavBar className= "hero is-primary"/>
            <ItemListContainer greeting={"hola"}/>
        </div>
    );
}

export default App