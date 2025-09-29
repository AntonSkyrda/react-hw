import './App.css'
import {Outlet} from "react-router";
import {MenuComponent} from "./components/menu-component/MenuComponent.tsx";

function App() {

    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    )
}

export default App
