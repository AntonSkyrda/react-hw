import './App.css'
import {MenuComponent} from "./components/menu-component/MenuComponent.tsx";
import {Outlet} from "react-router";

function App() {

    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    )
}

export default App
