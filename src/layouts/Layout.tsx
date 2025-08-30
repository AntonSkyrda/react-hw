import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";

export const Layout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};