import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";
import "./A1.css";

export const A1 = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
            A1
            {theme}
        </div>
    );
};